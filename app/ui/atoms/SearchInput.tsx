"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { debounce } from "@/lib/utils";

export type SearchSubmitHandler = (searchTerm: string) => void;

type Props = {
  placeholder: string;
  onSubmit?: SearchSubmitHandler;
  className?: string;
};

export default function SearchInput({ placeholder, className }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const debouncedOnChange = useRef(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchTerm = e.target.value;

      if (searchTerm) {
        params.set("query", searchTerm);
      } else {
        params.delete("query");
      }

      params.delete("page");
      replace(`${pathname}?${params.toString()}`);
    }, 300)
  );

  return (
    <div className={`flex gap-1 ${className}`}>
      <Input
        placeholder={placeholder}
        onChange={debouncedOnChange.current}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
