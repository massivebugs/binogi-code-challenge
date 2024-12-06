"use client";
import { components } from "@/lib/edamam/interfaces";
import { getBookmarkedRecipes } from "@/lib/localstorage";
import { useEffect } from "react";
import { useState } from "react";
import RecipeList from "../ui/organisms/RecipeList";

export default function Page() {
  const [recipes, setRecipes] = useState<components["schemas"]["Recipe"][]>([]);

  useEffect(() => {
    // We are retrieving recipe data from LocalStorage, and using CSR because
    // we haven't set up any backends for storing user's bookmark data.
    const recipes = Array.from(getBookmarkedRecipes().values());
    setRecipes(recipes);
  }, []);

  return (
    <main className="flex flex-col">
      <h1 className="text-center mb-3">Bookmarks</h1>
      <div className="flex flex-col gap-5 items-center justify-center pb-10">
        <RecipeList
          initialContKey={null}
          initialRecipes={recipes}
          className="w-[300px] md:w-[500px] lg:w-[700px]"
        />
      </div>
    </main>
  );
}
