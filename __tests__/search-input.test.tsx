import SearchInput from "@/app/ui/atoms/SearchInput";
import { fireEvent, render, screen } from "@testing-library/react";

const replaceMockFn = jest.fn();
jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");

  return {
    __esModule: true,
    ...originalModule,
    useRouter: () => ({
      push: jest.fn(),
      replace: replaceMockFn,
      prefetch: jest.fn(),
    }),
    useSearchParams: jest.fn().mockImplementation(() => {
      return new URLSearchParams(window.location.search);
    }),
    usePathname: jest.fn().mockImplementation(() => {
      return "";
    }),
  };
});

test("search input is debounced and query params are updated after 300ms", () => {
  jest.useFakeTimers();

  render(<SearchInput placeholder="Search for a Recipe" />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "burritos" } });

  expect(replaceMockFn).not.toHaveBeenCalled();

  jest.advanceTimersByTime(300);

  expect(replaceMockFn).toHaveBeenCalledTimes(1);
  expect(replaceMockFn).toHaveBeenCalledWith("?query=burritos");

  jest.useRealTimers();
});
