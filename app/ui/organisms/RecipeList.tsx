"use client";
import Link from "next/link";
import RecipeCard from "../molecules/RecipeCard";
import { components } from "@/lib/edamam/interfaces";
import { getRecipeIdFromUri } from "@/lib/utils";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { getRecipes } from "@/lib/api";
import { useSearchParams } from "next/navigation";

type Props = {
  initialContKey: string | null;
  initialRecipes: components["schemas"]["Recipe"][];
  className?: string;
};

export default function RecipeList({
  initialContKey,
  initialRecipes,
  className,
}: Props) {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] =
    useState<components["schemas"]["Recipe"][]>(initialRecipes);
  const contKey = useRef(initialContKey);

  // We'll use this element to check if we have reached the bottom of the list so we can load more.
  const loadingRef = useRef<HTMLDivElement>(null);
  const [isEndOfList, setIsEndOfList] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    setRecipes(initialRecipes);

    // IntersectionObserver will notify us when the loadingRef is shown on screen (a.k.a scrolled down to bottom)
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          setIsEndOfList(el.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (loadingRef.current) {
      observer.current.observe(loadingRef.current);
    }
  }, [initialRecipes]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const query = params.get("query");

    // Load some more recipies using the continue key provided by the API
    (async () => {
      if (isEndOfList && contKey.current) {
        const { recipes: newRecipes, contKey: nextContKey } = await getRecipes(
          query ?? "",
          contKey.current
        );

        // Prevent scroll abuse and duplicate requests
        if (contKey.current !== nextContKey) {
          setRecipes((recipes) => recipes.concat(newRecipes));
        }

        contKey.current = nextContKey;
      }
    })();
  }, [isEndOfList]);

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
            className="max-w-full"
          />
        </Link>
      ))}
      {initialContKey && (
        <div
          ref={loadingRef}
          className="w-full rounded-md py-3 text-center bg-slate-100 animate-pulse"
        >
          Loading...
        </div>
      )}
    </div>
  );
}
