"use client";
import { components } from "@/lib/edamam/interfaces";
import { getBookmarkedRecipes } from "@/lib/localstorage";
import { useEffect } from "react";
import { useState } from "react";

export default function Page() {
  const [bookmarks, setBookmarks] = useState<components["schemas"]["Recipe"][]>(
    []
  );

  useEffect(() => {
    function reloadBookmarks() {
      const recipes = Array.from(getBookmarkedRecipes().values());
      setBookmarks(recipes);
    }

    reloadBookmarks();
  }, []);
  return (
    <div>
      Bookmarks
      {bookmarks.length}
    </div>
  );
}
