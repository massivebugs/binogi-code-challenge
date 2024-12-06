import BookmarkRecipeButton from "@/app/ui/molecules/BookmarkRecipeButton";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockRecipeData } from "./__mocks__/data/recipe";

const storageSet = jest.spyOn(Storage.prototype, "setItem");

function cleanup() {
  window.localStorage.clear();
}

test("recipe is added and removed from localstorage when clicking the button", () => {
  render(<BookmarkRecipeButton recipe={mockRecipeData} />);

  const button = screen.getByRole("button", {
    name: "Click to bookmark this recipe",
  });
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/bookmark this recipe!/i);

  fireEvent.click(button);

  expect(button).toHaveTextContent(/bookmarked/i);

  expect(storageSet).toHaveBeenCalledTimes(1);
  expect(storageSet).toHaveBeenCalledWith(
    "bookmarked_recipes",
    JSON.stringify([["one", mockRecipeData]])
  );

  fireEvent.click(button);

  expect(button).toHaveTextContent(/bookmark this recipe!/i);

  expect(storageSet).toHaveBeenCalledTimes(2);
  expect(storageSet).toHaveBeenCalledWith(
    "bookmarked_recipes",
    JSON.stringify([])
  );

  cleanup();
});
