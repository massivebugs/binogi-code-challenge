"use client";

import { components } from "./edamam/interfaces";

export const LOCALSTORAGE_BOOKMARKED_RECIPES = "bookmarked_recipes";

export function getBookmarkedRecipes(): Map<
  string,
  components["schemas"]["Recipe"]
> {
  let bookmarkedRecipes: [string, components["schemas"]["Recipe"]][] = [];
  try {
    bookmarkedRecipes = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_BOOKMARKED_RECIPES) ?? "[]"
    );
  } catch {
    // Nothing here, default to initialized array
  }

  return new Map(bookmarkedRecipes);
}
