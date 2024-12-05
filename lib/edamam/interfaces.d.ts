/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/recipes/v2": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search for a Recipe
         * @description This endpoint returns a list of recipes matching the provided criteria. Get started by placing your search query
         *     in the `q` parameter, fill in your 3scale credentials, and press the "Try it out!" button at the bottom.
         *     Additionally, refine your search by using the optional parameters to specify what you are looking for.
         *
         *     __Note:__
         *     - When mentioned, 'floating point values' refers to values such as `50.0`, `50.`, `0.5`, and `.5`.
         *     - When speaking of ranges, the API accepts values such as `1.0+`, `1.0-50.0`, or `50.0`, for floating point
         *       ranges.
         *
         *     The parameters with __(required)__ in their value box are the required parameters and must be defined as part
         *     of a request, all others can be left blank if you do not wish to define them.
         *
         *     __Access Point:__ https://api.edamam.com/api/recipes/v2
         */
        get: {
            parameters: {
                query: {
                    /** @description Type of recipes to search for. For backward compatibility you can also specify `any` and it will be equivalent to specifying all enumerated values. */
                    type: ("public" | "user")[];
                    /** @description Allow beta features in the request and response */
                    beta?: boolean;
                    /** @description Query text, for example "chicken".<br> __REQUIRED__ if no other parameter is specified. __NOT REQUIRED__ if any other parameter (other than application credentials) is specified. */
                    q?: string;
                    /** @description The application ID, obtained from the account dashboard, https://developer.edamam.com/admin/applications. */
                    app_id: string;
                    /** @description The application key, obtained from the account dashboard, https://developer.edamam.com/admin/applications. */
                    app_key: string;
                    /** @description Filter by number of ingredients (MIN+, MIN-MAX, MAX), where MIN and MAX are integer numbers.
                     *     Example: `ingr=5-8`
                     *      */
                    ingr?: string;
                    /** @description Diet label. You can select multiple labels by holding shift and left-clicking all the labels needed. */
                    diet?: ("balanced" | "high-fiber" | "high-protein" | "low-carb" | "low-fat" | "low-sodium")[];
                    /** @description Health label. You can select multiple labels by holding shift and left-clicking all the labels needed. */
                    health?: ("alcohol-cocktail" | "alcohol-free" | "celery-free" | "crustacean-free" | "dairy-free" | "DASH" | "egg-free" | "fish-free" | "fodmap-free" | "gluten-free" | "immuno-supportive" | "keto-friendly" | "kidney-friendly" | "kosher" | "low-fat-abs" | "low-potassium" | "low-sugar" | "lupine-free" | "Mediterranean" | "mollusk-free" | "mustard-free" | "no-oil-added" | "paleo" | "peanut-free" | "pescatarian" | "pork-free" | "red-meat-free" | "sesame-free" | "shellfish-free" | "soy-free" | "sugar-conscious" | "sulfite-free" | "tree-nut-free" | "vegan" | "vegetarian" | "wheat-free")[];
                    /** @description The type of cuisine of the recipe */
                    cuisineType?: ("American" | "Asian" | "British" | "Caribbean" | "Central Europe" | "Chinese" | "Eastern Europe" | "French" | "Indian" | "Italian" | "Japanese" | "Kosher" | "Mediterranean" | "Mexican" | "Middle Eastern" | "Nordic" | "South American" | "South East Asian")[];
                    /** @description The type of meal a recipe belongs to */
                    mealType?: ("Breakfast" | "Dinner" | "Lunch" | "Snack" | "Teatime")[];
                    /** @description The dish type a recipe belongs to */
                    dishType?: ("Biscuits and cookies" | "Bread" | "Cereals" | "Condiments and sauces" | "Desserts" | "Drinks" | "Main course" | "Pancake" | "Preps" | "Preserve" | "Salad" | "Sandwiches" | "Side dish" | "Soup" | "Starter" | "Sweets")[];
                    /** @description The format is calories=RANGE where RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers. The + symbol needs to be properly encoded. Example: `calories=100-300`
                     *     will return all recipes with which have between 100 and 300 kcal per serving.
                     *      */
                    calories?: string;
                    /** @description Time range for the total cooking and prep time for a recipe. The format is time=RANGE where RANGE is one of
                     *     MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly
                     *     encoded. Example: `time=1%2B` will return all recipes with available total time greater then 1 minute.
                     *      */
                    time?: string;
                    /** @description Show only recipes, which have images with selected sizes */
                    imageSize?: ("LARGE" | "REGULAR" | "SMALL" | "THUMBNAIL")[];
                    /** @description Filter by glycemic index. The format is FLOAT-RANGE */
                    glycemicIndex?: string;
                    /** @description Filter by diet inflammatory index. The format is FLOAT-RANGE */
                    inflammatoryIndex?: string;
                    /** @description Excluding recipes with certain ingredients. The format is `excluded=FOOD` where FOOD is replaced by the name
                     *     of the specific food you donâ€™t want to be present in the recipe results. More than one food can be excluded
                     *     at the same time. Example: excluded=vinegar&excluded=pretzel will exclude any recipes which contain vinegar
                     *     or pretzels in their ingredient list.
                     *      */
                    excluded?: string[];
                    /** @description Select whether you want this query to respond with a random selection of 20 recipes based on the criteria
                     *     filled. If there were only 20 or less possible results, this will return those results in random order.
                     *      */
                    random?: boolean;
                    /** @description Calcium, Ca. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     For example: `nutrients[CA]=50+` means minimum 50mg calcium, where `50+` has to be properly encoded as
                     *     `50%2B` `nutrients[FAT]=30` means maximum 30g fat and `nutrients[FE]=5-10` means iron between 5mg and 10mg
                     *     inclusive.
                     *      */
                    "nutrients[CA]"?: string;
                    /** @description Carbohydrate, by difference. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and
                     *     MAX are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[CHOCDF]"?: string;
                    /** @description Carbohydrates (net). Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[CHOCDF.net]"?: string;
                    /** @description Cholesterol. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[CHOLE]"?: string;
                    /** @description Energy. Unit: kcal. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[ENERC_KCAL]"?: string;
                    /** @description Fatty acids, total monounsaturated. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN
                     *     and MAX are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FAMS]"?: string;
                    /** @description Fatty acids, total polyunsaturated. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN
                     *     and MAX are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FAPU]"?: string;
                    /** @description Fatty acids, total saturated. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and
                     *     MAX are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FASAT]"?: string;
                    /** @description Total lipid (fat). Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FAT]"?: string;
                    /** @description Fatty acids, total trans. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX
                     *     are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FATRN]"?: string;
                    /** @description Iron, Fe. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FE]"?: string;
                    /** @description Fiber, total dietary. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FIBTG]"?: string;
                    /** @description Folic acid. Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FOLAC]"?: string;
                    /** @description Folate, DFE. Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FOLDFE]"?: string;
                    /** @description Folate (food). Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[FOLFD]"?: string;
                    /** @description Potassium, K. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[K]"?: string;
                    /** @description Magnesium. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[MG]"?: string;
                    /** @description Sodium, Na. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[NA]"?: string;
                    /** @description Niacin. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[NIA]"?: string;
                    /** @description Phosphorus, P. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[P]"?: string;
                    /** @description Protein. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[PROCNT]"?: string;
                    /** @description Riboflavin. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[RIBF]"?: string;
                    /** @description Sugars, total. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[SUGAR]"?: string;
                    /** @description Sugars, added. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[SUGAR.added]"?: string;
                    /** @description Sugar alcohols. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[Sugar.alcohol]"?: string;
                    /** @description Thiamin. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[THIA]"?: string;
                    /** @description Vitamin E (alpha-tocopherol). Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and
                     *     MAX are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[TOCPHA]"?: string;
                    /** @description Vitamin A, RAE. Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[VITA_RAE]"?: string;
                    /** @description Vitamin B12. Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[VITB12]"?: string;
                    /** @description Vitamin B6. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[VITB6A]"?: string;
                    /** @description Vitamin C, total ascorbic acid. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN
                     *     and MAX are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[VITC]"?: string;
                    /** @description Vitamin D (D2 + D3). Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are
                     *     non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[VITD]"?: string;
                    /** @description Vitamin K (phylloquinone). Unit: Âµg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX
                     *     are non-negative floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[VITK1]"?: string;
                    /** @description Water. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[WATER]"?: string;
                    /** @description Zinc, Zn. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative
                     *     floating point numbers.<br>
                     *     See calcium for an example for how to fill in the range.
                     *      */
                    "nutrients[ZN]"?: string;
                    /** @description Recipe fields to be included in the response. */
                    field?: ("uri" | "label" | "image" | "images" | "source" | "url" | "shareAs" | "yield" | "dietLabels" | "healthLabels" | "cautions" | "ingredientLines" | "ingredients" | "calories" | "glycemicIndex" | "inflammatoryIndex" | "totalCO2Emissions" | "co2EmissionsClass" | "totalWeight" | "totalTime" | "cuisineType" | "mealType" | "dishType" | "totalNutrients" | "totalDaily" | "digest" | "tags" | "externalId")[];
                    /** @description Filter recipes by their CO2 footprint. */
                    co2EmissionsClass?: "A+" | "A" | "B" | "C" | "D" | "E" | "F" | "G";
                    /** @description Show only recipes containing the specified tags. */
                    tag?: string[];
                    /** @description _(Beta)_ Show only recipes containing the specified system tags. This field is subject to account
                     *     subscription restrictions.
                     *      */
                    sysTag?: "live"[];
                };
                header?: {
                    /** @description ID of the account user. Should be used _only_ if the account is configured for active user tracking. */
                    "Edamam-Account-User"?: string;
                    /** @description Search recipes in the specified language. */
                    "Accept-Language"?: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description A list of recipes */
                200: {
                    headers: {
                        /** @description The localization language. */
                        "Content-Language"?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Response"];
                    };
                };
                /** @description A list of errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description A list of errors */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/recipes/v2/by-uri": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup Recipe(s) using their URI(s)
         * @description Search for recipes by their URI. Note, that the API response doesn't directly indicate if there are missing
         *     recipes. Instead, you need to compare he URIs to see if any are missing.
         *
         */
        get: {
            parameters: {
                query: {
                    /** @description Type of recipes to search for. */
                    type: "public" | "user";
                    /** @description Allow beta features in the request and response */
                    beta?: boolean;
                    /** @description Recipe URIs - up to 20 */
                    uri: string[];
                    /** @description The application ID, obtained from the account dashboard, https://developer.edamam.com/admin/applications. */
                    app_id: string;
                    /** @description The application key, obtained from the account dashboard, https://developer.edamam.com/admin/applications. */
                    app_key: string;
                    /** @description Recipe fields to be included in the response. */
                    field?: ("uri" | "label" | "image" | "images" | "source" | "url" | "shareAs" | "yield" | "dietLabels" | "healthLabels" | "cautions" | "ingredientLines" | "ingredients" | "calories" | "glycemicIndex" | "inflammatoryIndex" | "totalCO2Emissions" | "co2EmissionsClass" | "totalWeight" | "totalTime" | "cuisineType" | "mealType" | "dishType" | "totalNutrients" | "totalDaily" | "digest" | "tags" | "externalId")[];
                };
                header?: {
                    /** @description ID of the account user. Should be used *only* if the account is configured for active user tracking. */
                    "Edamam-Account-User"?: string;
                    /** @description Search recipes in the specified language. */
                    "Accept-Language"?: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description A list of recipes */
                200: {
                    headers: {
                        /** @description The localization language. */
                        "Content-Language"?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Response"];
                    };
                };
                /** @description A list of errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description A list of errors */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/recipes/v2/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup a Specific Recipe by ID
         * @description Returns the nutritional information for given recipe. These requests are constructed automatically and can
         *     be found in `hits[]._links.self.href`.
         *
         */
        get: {
            parameters: {
                query: {
                    /** @description Type of recipes to search for. */
                    type: "public" | "user";
                    /** @description Allow beta features in response. */
                    beta?: boolean;
                    /** @description The application ID, obtained from the account dashboard, https://developer.edamam.com/admin/applications. */
                    app_id: string;
                    /** @description The application key, obtained from the account dashboard, https://developer.edamam.com/admin/applications. */
                    app_key: string;
                    /** @description Recipe fields to be included in the response. */
                    field?: ("uri" | "label" | "image" | "images" | "source" | "url" | "shareAs" | "yield" | "dietLabels" | "healthLabels" | "cautions" | "ingredientLines" | "ingredients" | "calories" | "glycemicIndex" | "inflammatoryIndex" | "totalCO2Emissions" | "co2EmissionsClass" | "totalWeight" | "totalTime" | "cuisineType" | "mealType" | "dishType" | "totalNutrients" | "totalDaily" | "digest" | "tags" | "externalId")[];
                };
                header?: {
                    /** @description ID of the account user. Should be used *only* if the account is configured for active user tracking. */
                    "Edamam-Account-User"?: string;
                    /** @description Search recipes in the specified language. */
                    "Accept-Language"?: string;
                };
                path: {
                    /** @description The recipe ID */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Recipe info */
                200: {
                    headers: {
                        /** @description The localization language. */
                        "Content-Language"?: string;
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Hit"];
                    };
                };
                /** @description A list of errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description A list of errors */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
                /** @description A list of errors */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Errors"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Response: {
            from: number;
            to: number;
            count: number;
            _links: components["schemas"]["Link"];
            hits: components["schemas"]["Hit"][];
        };
        Errors: components["schemas"]["Error"][];
        Error: {
            errorCode: string;
            message: string;
            params: string[];
        };
        Links: {
            self: components["schemas"]["Link"];
            next: components["schemas"]["Link"];
        };
        Link: {
            href: string;
            title: string;
        };
        Hit: {
            recipe: components["schemas"]["Recipe"];
            _links: components["schemas"]["Links"];
        };
        Recipe: {
            uri: string;
            label: string;
            image: string;
            images: {
                THUMBNAIL: components["schemas"]["ImageInfo"];
                SMALL: components["schemas"]["ImageInfo"];
                REGULAR: components["schemas"]["ImageInfo"];
                LARGE: components["schemas"]["ImageInfo"];
            };
            source: string;
            url: string;
            shareAs: string;
            yield: number;
            dietLabels: string[];
            healthLabels: string[];
            cautions: string[];
            ingredientLines: string[];
            ingredients: components["schemas"]["Ingredient"][];
            calories: number;
            glycemicIndex: number;
            inflammatoryIndex: number;
            totalCO2Emissions: number;
            /** @enum {string} */
            co2EmissionsClass: "A+" | "A" | "B" | "C" | "D" | "E" | "F" | "G";
            totalWeight: number;
            cuisineType: string[];
            mealType: string[];
            dishType: string[];
            instructions: string[];
            tags: string[];
            externalId: string;
            totalNutrients: components["schemas"]["NutrientsInfo"];
            totalDaily: components["schemas"]["NutrientsInfo"];
            digest: components["schemas"]["Digest"];
        };
        Ingredient: {
            text: string;
            quantity: number;
            measure: string;
            food: string;
            weight: number;
            foodId: string;
        };
        NutrientsInfo: {
            [key: string]: components["schemas"]["NutrientInfo"];
        };
        NutrientInfo: {
            label: string;
            quantity: number;
            unit: string;
        };
        Digest: components["schemas"]["DigestEntry"][];
        DigestEntry: {
            label: string;
            tag: string;
            schemaOrgTag: string;
            total: number;
            hasRDI: boolean;
            daily: number;
            unit: string;
            sub: components["schemas"]["Digest"];
        };
        ImageInfo: {
            url: string;
            width: number;
            height: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
