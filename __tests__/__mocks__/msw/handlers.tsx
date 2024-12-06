import { rest } from "msw";
import { mockRecipesResponse } from "../data/recipesResponse";
import { mockRecipeByIdResponse } from "../data/recipeByIdResponse";

export const handlers = [
  rest.get("https://api.edamam.com/api/recipes/v2", async (req, res, ctx) => {
    return res(ctx.json(mockRecipesResponse));
  }),
  rest.get(
    "https://api.edamam.com/api/recipes/v2/:id",
    async (req, res, ctx) => {
      return res(ctx.json(mockRecipeByIdResponse));
    }
  ),
];
