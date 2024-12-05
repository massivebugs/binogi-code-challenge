import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(...args);
    }, delayMs);
  };
}

// NOTE: Somehow, EDAMAM Recipe endpoint's Recipe response does not include
// a dedicated field for the recipe ID (the field might be obtainable via setting the externalId query field, but it doesn't work).
// So, we are extracting the id from the uri of the response.
export function getRecipeIdFromUri(uri: string): string | undefined {
  return uri.split("recipe_")[1];
}
