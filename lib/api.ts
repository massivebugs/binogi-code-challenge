"use server";

import createClient from "openapi-fetch";
import { paths } from "./edamam/interfaces";

const client = createClient<paths>({
  baseUrl: "https://api.edamam.com",
});

export const getRecipes = async (query: string) => {
  try {
    const { data, error } = await client.GET("/api/recipes/v2", {
      params: {
        query: {
          type: ["public"],
          q: query,
          app_id: process.env.EDAMAM_API_APP_ID as string,
          app_key: process.env.EDAMAM_API_KEY as string,
          imageSize: ["THUMBNAIL"],
          field: [
            // "externalId", // NOTE: Does not seem to work?
            "uri",
            "label",
            "image",
            "images",
            "calories",
            "healthLabels",
            "dietLabels",
          ],
        },
      },
    });

    if (!data && error) {
      throw error;
    }

    return data.hits.map((v) => v.recipe);
  } catch {
    throw "An error has occured!";
  }
};

export const getRecipeById = async (id: string) => {
  try {
    const { data, error } = await client.GET("/api/recipes/v2/{id}", {
      params: {
        path: {
          id,
        },
        query: {
          type: "public",
          app_id: process.env.EDAMAM_API_APP_ID as string,
          app_key: process.env.EDAMAM_API_KEY as string,
          imageSize: ["SMALL"],
          field: [
            "uri",
            "label",
            "image",
            "images",
            "calories",
            "ingredientLines",
            "totalNutrients",
            "healthLabels",
            "dietLabels",
          ],
        },
      },
    });

    if (!data && error) {
      throw error;
    }

    return data.recipe;
  } catch {
    throw "An error has occured!";
  }
};
