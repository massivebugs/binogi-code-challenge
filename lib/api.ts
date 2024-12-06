"use server";

import createClient from "openapi-fetch";
import { paths } from "./edamam/interfaces";

const client = createClient<paths>({
  baseUrl: "https://api.edamam.com",
});

export async function getRecipes(query: string, contKey?: string) {
  try {
    const { data, error } = await client.GET("/api/recipes/v2", {
      params: {
        query: {
          type: ["public"],
          q: query,
          _cont: contKey,
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

    // We're only extracting the key needed for pagination
    let nextContKey = null;
    if (data._links.next?.href) {
      const urlParams = new URLSearchParams(
        data._links.next?.href.split("?")[1]
      );
      nextContKey = urlParams.get("_cont");
    }

    return {
      recipes: data.hits.map((v) => v.recipe),
      contKey: nextContKey,
    };
  } catch (e) {
    throw e;
  }
}

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
          imageSize: ["REGULAR"],
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
  } catch (e) {
    throw e;
  }
};
