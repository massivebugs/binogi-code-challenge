import { getRecipeById } from "@/lib/api";

type Props = {
  params?: Promise<{
    id?: string;
  }>;
};

export default async function Page({ params }: Props) {
  const p = await params;
  const recipe = await getRecipeById(p?.id ?? "");

  return <div>Recipe {recipe.label}</div>;
}
