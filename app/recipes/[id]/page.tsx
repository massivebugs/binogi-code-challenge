import RecipeNutrients from "@/app/ui/atoms/RecipeNutrients";
import RecipeTags from "@/app/ui/atoms/RecipeTags";
import BookmarkRecipeButton from "@/app/ui/molecules/BookmarkRecipeButton";
import { Separator } from "@/components/ui/separator";
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
      <div className="w-[300px] md:w-[500px] lg:w-[700px]">
        <Image
          width={recipe.images.REGULAR.width}
          height={recipe.images.REGULAR.height}
          src={recipe.images.REGULAR.url}
          alt={"Image of recipe"}
          className="rounded-md mx-auto mb-5"
          priority={true}
          unoptimized={true}
        />
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-center mb-5">
          <h2 className="font-bold text-xl">{recipe.label}</h2>
          <span className="italic text-slate-500">
            {Math.round(recipe.calories)} kcal
          </span>
          <BookmarkRecipeButton recipe={recipe} />
        </div>
        <Separator className="my-3" />
        <div className="mb-3">
          <h3 className="font-semibold">
            Ingredients:{" "}
            <span className="italic text-slate-800">
              Yields {recipe.yield} servings
            </span>
          </h3>
          <ul className="list-disc list-inside">
            {recipe.ingredientLines.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <h3 className="font-semibold">Nutrients:</h3>
          <RecipeNutrients
            nutrients={recipe.totalNutrients}
            className="h-[150px]"
          />
        </div>
        <div className="mb-3">
          <RecipeTags tags={[...recipe.healthLabels, ...recipe.dietLabels]} />
        </div>
      </div>
    </main>
  );
}
