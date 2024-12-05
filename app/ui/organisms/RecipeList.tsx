"use client";

import Link from "next/link";
import RecipeCard from "../molecules/RecipeCard";
import { components } from "@/lib/edamam/interfaces";
import { getRecipeIdFromUri } from "@/lib/utils";

type Props = {
  recipes: components["schemas"]["Recipe"][];
  className?: string;
};

export default function RecipeList({ recipes, className }: Props) {
  return (
    <div
      className={`flex flex-col justify-center gap-[0.7em] items-center ${className}`}
    >
      {recipes.map((recipe) => (
        <Link
          key={recipe?.uri}
          href={`/recipes/${getRecipeIdFromUri(recipe.uri)}`}
        >
          <RecipeCard
            recipe={recipe as components["schemas"]["Recipe"]}
            className="w-full"
          />
        </Link>
      ))}
    </div>
  );
}
