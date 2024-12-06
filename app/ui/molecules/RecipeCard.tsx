"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { components } from "@/lib/edamam/interfaces";
import Image from "next/image";
import RecipeTags from "../atoms/RecipeTags";

type Props = {
  recipe: components["schemas"]["Recipe"];
  className?: string;
};

export default function RecipeCard({ recipe, className }: Props) {
  return (
    <Card className={`${className} cursor-pointer`}>
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-4">
          {recipe.images.THUMBNAIL.url && (
            <Image
              width={recipe.images.THUMBNAIL?.width}
              height={recipe.images.THUMBNAIL?.height}
              src={recipe.images.THUMBNAIL.url}
              alt={recipe.label ?? "Image of recipe"}
              className="mx-auto md:mx-0"
              unoptimized={true}
            />
          )}
          <div className="flex flex-col gap-2">
            <CardTitle className="flex gap-2">{recipe.label}</CardTitle>
            <CardDescription>
              {Math.round(recipe.calories ?? 0)} kcal
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter>
        <RecipeTags
          className="h-[70px]"
          tags={[...(recipe.healthLabels ?? []), ...(recipe.dietLabels ?? [])]}
        />
      </CardFooter>
    </Card>
  );
}
