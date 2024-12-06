"use client";

import { Button } from "@/components/ui/button";
import { components } from "@/lib/edamam/interfaces";
import {
  getBookmarkedRecipes,
  LOCALSTORAGE_BOOKMARKED_RECIPES,
} from "@/lib/localstorage";
import { getRecipeIdFromUri } from "@/lib/utils";
import { useState } from "react";
import BookmarkIcon from "../atoms/BookmarkIcon";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type Props = {
  recipe: components["schemas"]["Recipe"];
  className?: string;
};

export default function BookmarkRecipeButton({ recipe, className }: Props) {
  const { toast } = useToast();
  const recipeId = getRecipeIdFromUri(recipe.uri) as string;

  const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);

  useEffect(() => {
    setIsBookmarked(getBookmarkedRecipes().has(recipeId));
  }, [recipeId]);

  function onClick() {
    const bookmarks = getBookmarkedRecipes();
    if (bookmarks.has(recipeId)) {
      bookmarks.delete(recipeId);
      setIsBookmarked(false);
      toast({
        title: "Removed from bookmarks!",
      });
    } else {
      bookmarks.set(recipeId, recipe);
      setIsBookmarked(true);
      toast({
        title: "Added to bookmarks!",
      });
    }

    localStorage.setItem(
      LOCALSTORAGE_BOOKMARKED_RECIPES,
      JSON.stringify(Array.from(bookmarks))
    );
  }

  return (
    recipeId &&
    isBookmarked !== null && (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`p-2 ${className}`}
        variant={isBookmarked ? "default" : "outline"}
        aria-label="Click to bookmark this recipe"
      >
        {isBookmarked ? "Bookmarked" : "Bookmark this recipe!"}
        <BookmarkIcon
          width={50}
          height={50}
          variant={isBookmarked ? "light" : "dark"}
        />
      </Button>
    )
  );
}
