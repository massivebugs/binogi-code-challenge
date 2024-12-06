import { getRecipes } from "@/lib/api";
import RecipeList from "./RecipeList";

type Props = {
  query: string;
  page: number;
};

export default async function RecipeSearchResults({ query }: Props) {
  const { recipes, contKey } = await getRecipes(query);

  return (
    <div className="flex flex-col pb-10">
      <RecipeList
        initialContKey={contKey}
        initialRecipes={recipes}
        className="w-[300px] md:w-[500px] lg:w-[700px]"
      />
    </div>
  );
}
