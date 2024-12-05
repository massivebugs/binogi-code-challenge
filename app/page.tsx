import { Suspense } from "react";
import SearchInput from "./ui/atoms/SearchInput";
import RecipeCardLoading from "./ui/molecules/RecipeCardLoading";
import RecipeSearchResults from "./ui/organisms/RecipeSearchResults";

type Props = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  // Recipe search query parameters
  const query = params?.query ?? "";
  const page = Number(params?.page) ?? 0;

  return (
    <main className="flex flex-col">
      <h1 className="text-center mb-3">Search for a Recipe</h1>
      <div className="flex flex-col gap-5 items-center justify-center">
        <SearchInput placeholder="Name of a Recipe" className="w-[300px]" />
        <Suspense
          key={query + page}
          fallback={
            <RecipeCardLoading className="w-[300px] md:w-[500px] lg:w-[700px] h-[250px]" />
          }
        >
          <RecipeSearchResults query={query} page={page} />
        </Suspense>
      </div>
    </main>
  );
}
