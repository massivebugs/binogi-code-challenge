import RecipeNutrients from "@/app/ui/atoms/RecipeNutrients";
import RecipeTags from "@/app/ui/atoms/RecipeTags";
import { getRecipeById } from "@/lib/api";
import Image from "next/image";

type Props = {
  params?: Promise<{
    id?: string;
  }>;
};

export default async function Page({ params }: Props) {
  const p = await params;
  const recipe = await getRecipeById(p?.id ?? "");

  return (
    <main className="flex justify-center">
      <div className="w-[300px] md:w-[500px] lg:w-[700px] flex flex-col justify-center items-center gap-2">
        <Image
          width={recipe.images.REGULAR.width}
          height={recipe.images.REGULAR.height}
          src={recipe.images.REGULAR.url}
          alt={"Image of recipe"}
          className="rounded-md"
        />
        <h2 className="font-bold text-xl">{recipe.label}</h2>
        <p>{Math.round(recipe.calories ?? 0)} kcal</p>
        <p>Ingredients:</p>
        <ul className="list-disc list-inside">
          {recipe.ingredientLines.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
        <p>Nutrients:</p>
        <RecipeNutrients
          nutrients={recipe.totalNutrients}
          className="h-[150px]"
        />
        <RecipeTags tags={[...recipe.healthLabels, ...recipe.dietLabels]} />
      </div>
    </main>
  );
}
