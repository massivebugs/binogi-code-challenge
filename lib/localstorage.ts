"use client";

import { components } from "./edamam/interfaces";

export function getBookmarkedRecipes(): Map<
  string,
  components["schemas"]["Recipe"]
> {
  let bookmarkedRecipes: [string, components["schemas"]["Recipe"]][] = [];
  try {
    bookmarkedRecipes = JSON.parse(
      localStorage.getItem("bookmarked_recipes") ?? "[]"
    );
  } catch {
    // Nothing here, default to initialized array
  }

  return new Map(bookmarkedRecipes);
}
