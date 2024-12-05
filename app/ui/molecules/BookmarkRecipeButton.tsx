"use client";

import { Button } from "@/components/ui/button";
import { components } from "@/lib/edamam/interfaces";
import { getBookmarkedRecipes } from "@/lib/localstorage";
import { getRecipeIdFromUri } from "@/lib/utils";
import { useState } from "react";
import BookmarkIcon from "../atoms/BookmarkIcon";
import { useEffect } from "react";

type Props = {
  recipe: components["schemas"]["Recipe"];
  className?: string;
};

export default function BookmarkRecipeButton({ recipe, className }: Props) {
  const recipeId = getRecipeIdFromUri(recipe.uri) as string;

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    setIsBookmarked(getBookmarkedRecipes().has(recipeId));
  }, [recipeId]);

  function onClick() {
    const bookmarks = getBookmarkedRecipes();
    if (bookmarks.has(recipeId)) {
      bookmarks.delete(recipeId);
      setIsBookmarked(false);
    } else {
      bookmarks.set(recipeId, recipe);
      setIsBookmarked(true);
    }

    localStorage.setItem(
      "bookmarked_recipes",
      JSON.stringify(Array.from(bookmarks))
    );
  }

  return (
    recipeId && (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={className}
        variant={isBookmarked ? "default" : "outline"}
        aria-label="Click to bookmark this recipe"
      >
        <BookmarkIcon
          width={30}
          height={30}
          variant={isBookmarked ? "light" : "dark"}
        />
      </Button>
    )
  );
}
