import { getRecipes } from "@/lib/api";
import RecipeList from "./RecipeList";

type Props = {
  query: string;
  page: number;
};

export default async function RecipeSearchResults({ query, page }: Props) {
  // TODO: Use this later
  console.log(page);
  const recipes = await getRecipes(query);

  return (
    <RecipeList
      recipes={recipes}
      className="w-[300px] md:w-[500px] lg:w-[700px]"
    />
  );
}
