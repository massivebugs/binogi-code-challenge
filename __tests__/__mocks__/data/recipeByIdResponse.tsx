import { components } from "@/lib/edamam/interfaces";

export const mockRecipeByIdResponse: {
  recipe: components["schemas"]["Recipe"];
  _links: components["schemas"]["Links"];
} = {
  recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_one",
    label: "Frothy Iced Matcha Green Tea Recipe",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLWVhc3QtMSJHMEUCIQDmJuUYJLqlsaP8gpUQBrcjRgQi8wJROe%2B4tZO9%2Fi8mxwIgPvranZW7K%2BVLKDzhGxPsrpBfWLcqOLxdeoF%2BIyIg%2FRoquQUILBAAGgwxODcwMTcxNTA5ODYiDPoVpF4%2B75LMddxMvyqWBaa3rz5mhyvAPbmzjJLLfULAJX8qEUWuQJECXVkgUZg8t3GklS%2FvgTfvzJhDsnJCS%2F%2BkUzPVnsA3UvZZjMOOdI%2F7mJV5lfEOH8Opx98gyIEWnPhxpKSK5AUF3ARzD9VeQ72sxLc%2BCqIhxeD8OX2zDgPf96GLX68pbvdmuQKwTwTHVXAsLAj4KMOTIei11c%2Fdh5hIBD7ya6vCSBZNy8BdvK1Pwlf2CTb03iFLw6wI9tYluq0dT4UviszLtndFkfoQMjDHA7staBuYEAiPYi5MLdnZuMcGncJOh1b5gxZL9meJSHIwOj0KhMCC66ElO%2FYlnkgUibkCPpftmeP%2F5uEPGrE6K%2F%2BabFBKG2O%2BdEzUqj149vfKTG3pfy%2FND6LbyMgP8EvL8haHdK25Ua1867caDDo3uOGhEILCw28NZ7PGFReUJWPOrQVWYTk0kmJ5pznQmtqWZ5EIyKyudlberjDdp%2FLqyh5Uf44Y2CBl1Qa%2FdPs3lwPNEThx6p7ualNuaWTdaB86Ytv3t%2BCpgRR6VCNR0Tkj%2F4FrJ7NKde5fesBIjJg1TfYmOesg3Ci0AFuThQvzKaRmDhnGPjNsTClIi6EsGQNQFZE0PjE8M1y93dRJM%2F3MaG%2F8tN%2Fq5uJd0vA2HlrcIQ%2B7Hf20blD8VAgMkov77sbcUFsOVujHeVXFm%2BHDazAjv9%2FHW%2BlMysq3qa78roK2dcR4Xt%2FDBivt%2B9P15FUMnDDBpRXhyr%2Box62Y3h5GGJgd23HjJ7oy2cjj1rGDWVHkKxZK9fbaCKcT3s6Xd1CNUPyw2zyJYIJCspp79tFuWdhtD4Oi8nMey0liRRFIV%2BrS1zFXH5aCHx%2FDBcheaquqv0gPHcziKzm5cwDWbJ%2BbsROVnMakZ2xZML2iy7oGOrEBuULHGr4JJm2WgDodzFPOizyVvRnCtB8hSwmF8HKguMmsqhOh32X5c3WdpBHfHuNt5m3C8CnXcBMcJj%2B1Ap1W35XW0IBRBcFl79GX9E0M1Dywd1oOQkmGI8FnDmZWRZ%2FuD3BDoQ6ReX2vJjUVQe0Wx9zt8UYmKZ8OnwWiutgL1C%2FdkLYzyQGk%2FQkAVlDeTZUTf7QHg8umKSq1jtxsyXrBNATn5lV4yY9rnAYT8P0LjzP7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241206T113600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANYOE2BO%2F20241206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cfc0e0bc4efee2f5498d17070aa14c1314d468a9eeacad5e811adb90a26fbb5c",
    images: {
      THUMBNAIL: {
        url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLWVhc3QtMSJHMEUCIQDmJuUYJLqlsaP8gpUQBrcjRgQi8wJROe%2B4tZO9%2Fi8mxwIgPvranZW7K%2BVLKDzhGxPsrpBfWLcqOLxdeoF%2BIyIg%2FRoquQUILBAAGgwxODcwMTcxNTA5ODYiDPoVpF4%2B75LMddxMvyqWBaa3rz5mhyvAPbmzjJLLfULAJX8qEUWuQJECXVkgUZg8t3GklS%2FvgTfvzJhDsnJCS%2F%2BkUzPVnsA3UvZZjMOOdI%2F7mJV5lfEOH8Opx98gyIEWnPhxpKSK5AUF3ARzD9VeQ72sxLc%2BCqIhxeD8OX2zDgPf96GLX68pbvdmuQKwTwTHVXAsLAj4KMOTIei11c%2Fdh5hIBD7ya6vCSBZNy8BdvK1Pwlf2CTb03iFLw6wI9tYluq0dT4UviszLtndFkfoQMjDHA7staBuYEAiPYi5MLdnZuMcGncJOh1b5gxZL9meJSHIwOj0KhMCC66ElO%2FYlnkgUibkCPpftmeP%2F5uEPGrE6K%2F%2BabFBKG2O%2BdEzUqj149vfKTG3pfy%2FND6LbyMgP8EvL8haHdK25Ua1867caDDo3uOGhEILCw28NZ7PGFReUJWPOrQVWYTk0kmJ5pznQmtqWZ5EIyKyudlberjDdp%2FLqyh5Uf44Y2CBl1Qa%2FdPs3lwPNEThx6p7ualNuaWTdaB86Ytv3t%2BCpgRR6VCNR0Tkj%2F4FrJ7NKde5fesBIjJg1TfYmOesg3Ci0AFuThQvzKaRmDhnGPjNsTClIi6EsGQNQFZE0PjE8M1y93dRJM%2F3MaG%2F8tN%2Fq5uJd0vA2HlrcIQ%2B7Hf20blD8VAgMkov77sbcUFsOVujHeVXFm%2BHDazAjv9%2FHW%2BlMysq3qa78roK2dcR4Xt%2FDBivt%2B9P15FUMnDDBpRXhyr%2Box62Y3h5GGJgd23HjJ7oy2cjj1rGDWVHkKxZK9fbaCKcT3s6Xd1CNUPyw2zyJYIJCspp79tFuWdhtD4Oi8nMey0liRRFIV%2BrS1zFXH5aCHx%2FDBcheaquqv0gPHcziKzm5cwDWbJ%2BbsROVnMakZ2xZML2iy7oGOrEBuULHGr4JJm2WgDodzFPOizyVvRnCtB8hSwmF8HKguMmsqhOh32X5c3WdpBHfHuNt5m3C8CnXcBMcJj%2B1Ap1W35XW0IBRBcFl79GX9E0M1Dywd1oOQkmGI8FnDmZWRZ%2FuD3BDoQ6ReX2vJjUVQe0Wx9zt8UYmKZ8OnwWiutgL1C%2FdkLYzyQGk%2FQkAVlDeTZUTf7QHg8umKSq1jtxsyXrBNATn5lV4yY9rnAYT8P0LjzP7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241206T113600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANYOE2BO%2F20241206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=615b7877107b50be99d88bebc68266cc99eb841716adabb6015b7d824dc46f56",
        width: 100,
        height: 100,
      },
      SMALL: {
        url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLWVhc3QtMSJHMEUCIQDmJuUYJLqlsaP8gpUQBrcjRgQi8wJROe%2B4tZO9%2Fi8mxwIgPvranZW7K%2BVLKDzhGxPsrpBfWLcqOLxdeoF%2BIyIg%2FRoquQUILBAAGgwxODcwMTcxNTA5ODYiDPoVpF4%2B75LMddxMvyqWBaa3rz5mhyvAPbmzjJLLfULAJX8qEUWuQJECXVkgUZg8t3GklS%2FvgTfvzJhDsnJCS%2F%2BkUzPVnsA3UvZZjMOOdI%2F7mJV5lfEOH8Opx98gyIEWnPhxpKSK5AUF3ARzD9VeQ72sxLc%2BCqIhxeD8OX2zDgPf96GLX68pbvdmuQKwTwTHVXAsLAj4KMOTIei11c%2Fdh5hIBD7ya6vCSBZNy8BdvK1Pwlf2CTb03iFLw6wI9tYluq0dT4UviszLtndFkfoQMjDHA7staBuYEAiPYi5MLdnZuMcGncJOh1b5gxZL9meJSHIwOj0KhMCC66ElO%2FYlnkgUibkCPpftmeP%2F5uEPGrE6K%2F%2BabFBKG2O%2BdEzUqj149vfKTG3pfy%2FND6LbyMgP8EvL8haHdK25Ua1867caDDo3uOGhEILCw28NZ7PGFReUJWPOrQVWYTk0kmJ5pznQmtqWZ5EIyKyudlberjDdp%2FLqyh5Uf44Y2CBl1Qa%2FdPs3lwPNEThx6p7ualNuaWTdaB86Ytv3t%2BCpgRR6VCNR0Tkj%2F4FrJ7NKde5fesBIjJg1TfYmOesg3Ci0AFuThQvzKaRmDhnGPjNsTClIi6EsGQNQFZE0PjE8M1y93dRJM%2F3MaG%2F8tN%2Fq5uJd0vA2HlrcIQ%2B7Hf20blD8VAgMkov77sbcUFsOVujHeVXFm%2BHDazAjv9%2FHW%2BlMysq3qa78roK2dcR4Xt%2FDBivt%2B9P15FUMnDDBpRXhyr%2Box62Y3h5GGJgd23HjJ7oy2cjj1rGDWVHkKxZK9fbaCKcT3s6Xd1CNUPyw2zyJYIJCspp79tFuWdhtD4Oi8nMey0liRRFIV%2BrS1zFXH5aCHx%2FDBcheaquqv0gPHcziKzm5cwDWbJ%2BbsROVnMakZ2xZML2iy7oGOrEBuULHGr4JJm2WgDodzFPOizyVvRnCtB8hSwmF8HKguMmsqhOh32X5c3WdpBHfHuNt5m3C8CnXcBMcJj%2B1Ap1W35XW0IBRBcFl79GX9E0M1Dywd1oOQkmGI8FnDmZWRZ%2FuD3BDoQ6ReX2vJjUVQe0Wx9zt8UYmKZ8OnwWiutgL1C%2FdkLYzyQGk%2FQkAVlDeTZUTf7QHg8umKSq1jtxsyXrBNATn5lV4yY9rnAYT8P0LjzP7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241206T113600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANYOE2BO%2F20241206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aaf32a8cf53ee1e271794c76a358626c832fd3fb1bf391fb84559090f6dbc819",
        width: 200,
        height: 200,
      },
      REGULAR: {
        url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLWVhc3QtMSJHMEUCIQDmJuUYJLqlsaP8gpUQBrcjRgQi8wJROe%2B4tZO9%2Fi8mxwIgPvranZW7K%2BVLKDzhGxPsrpBfWLcqOLxdeoF%2BIyIg%2FRoquQUILBAAGgwxODcwMTcxNTA5ODYiDPoVpF4%2B75LMddxMvyqWBaa3rz5mhyvAPbmzjJLLfULAJX8qEUWuQJECXVkgUZg8t3GklS%2FvgTfvzJhDsnJCS%2F%2BkUzPVnsA3UvZZjMOOdI%2F7mJV5lfEOH8Opx98gyIEWnPhxpKSK5AUF3ARzD9VeQ72sxLc%2BCqIhxeD8OX2zDgPf96GLX68pbvdmuQKwTwTHVXAsLAj4KMOTIei11c%2Fdh5hIBD7ya6vCSBZNy8BdvK1Pwlf2CTb03iFLw6wI9tYluq0dT4UviszLtndFkfoQMjDHA7staBuYEAiPYi5MLdnZuMcGncJOh1b5gxZL9meJSHIwOj0KhMCC66ElO%2FYlnkgUibkCPpftmeP%2F5uEPGrE6K%2F%2BabFBKG2O%2BdEzUqj149vfKTG3pfy%2FND6LbyMgP8EvL8haHdK25Ua1867caDDo3uOGhEILCw28NZ7PGFReUJWPOrQVWYTk0kmJ5pznQmtqWZ5EIyKyudlberjDdp%2FLqyh5Uf44Y2CBl1Qa%2FdPs3lwPNEThx6p7ualNuaWTdaB86Ytv3t%2BCpgRR6VCNR0Tkj%2F4FrJ7NKde5fesBIjJg1TfYmOesg3Ci0AFuThQvzKaRmDhnGPjNsTClIi6EsGQNQFZE0PjE8M1y93dRJM%2F3MaG%2F8tN%2Fq5uJd0vA2HlrcIQ%2B7Hf20blD8VAgMkov77sbcUFsOVujHeVXFm%2BHDazAjv9%2FHW%2BlMysq3qa78roK2dcR4Xt%2FDBivt%2B9P15FUMnDDBpRXhyr%2Box62Y3h5GGJgd23HjJ7oy2cjj1rGDWVHkKxZK9fbaCKcT3s6Xd1CNUPyw2zyJYIJCspp79tFuWdhtD4Oi8nMey0liRRFIV%2BrS1zFXH5aCHx%2FDBcheaquqv0gPHcziKzm5cwDWbJ%2BbsROVnMakZ2xZML2iy7oGOrEBuULHGr4JJm2WgDodzFPOizyVvRnCtB8hSwmF8HKguMmsqhOh32X5c3WdpBHfHuNt5m3C8CnXcBMcJj%2B1Ap1W35XW0IBRBcFl79GX9E0M1Dywd1oOQkmGI8FnDmZWRZ%2FuD3BDoQ6ReX2vJjUVQe0Wx9zt8UYmKZ8OnwWiutgL1C%2FdkLYzyQGk%2FQkAVlDeTZUTf7QHg8umKSq1jtxsyXrBNATn5lV4yY9rnAYT8P0LjzP7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241206T113600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANYOE2BO%2F20241206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cfc0e0bc4efee2f5498d17070aa14c1314d468a9eeacad5e811adb90a26fbb5c",
        width: 300,
        height: 300,
      },
      LARGE: {
        url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLWVhc3QtMSJHMEUCIQDmJuUYJLqlsaP8gpUQBrcjRgQi8wJROe%2B4tZO9%2Fi8mxwIgPvranZW7K%2BVLKDzhGxPsrpBfWLcqOLxdeoF%2BIyIg%2FRoquQUILBAAGgwxODcwMTcxNTA5ODYiDPoVpF4%2B75LMddxMvyqWBaa3rz5mhyvAPbmzjJLLfULAJX8qEUWuQJECXVkgUZg8t3GklS%2FvgTfvzJhDsnJCS%2F%2BkUzPVnsA3UvZZjMOOdI%2F7mJV5lfEOH8Opx98gyIEWnPhxpKSK5AUF3ARzD9VeQ72sxLc%2BCqIhxeD8OX2zDgPf96GLX68pbvdmuQKwTwTHVXAsLAj4KMOTIei11c%2Fdh5hIBD7ya6vCSBZNy8BdvK1Pwlf2CTb03iFLw6wI9tYluq0dT4UviszLtndFkfoQMjDHA7staBuYEAiPYi5MLdnZuMcGncJOh1b5gxZL9meJSHIwOj0KhMCC66ElO%2FYlnkgUibkCPpftmeP%2F5uEPGrE6K%2F%2BabFBKG2O%2BdEzUqj149vfKTG3pfy%2FND6LbyMgP8EvL8haHdK25Ua1867caDDo3uOGhEILCw28NZ7PGFReUJWPOrQVWYTk0kmJ5pznQmtqWZ5EIyKyudlberjDdp%2FLqyh5Uf44Y2CBl1Qa%2FdPs3lwPNEThx6p7ualNuaWTdaB86Ytv3t%2BCpgRR6VCNR0Tkj%2F4FrJ7NKde5fesBIjJg1TfYmOesg3Ci0AFuThQvzKaRmDhnGPjNsTClIi6EsGQNQFZE0PjE8M1y93dRJM%2F3MaG%2F8tN%2Fq5uJd0vA2HlrcIQ%2B7Hf20blD8VAgMkov77sbcUFsOVujHeVXFm%2BHDazAjv9%2FHW%2BlMysq3qa78roK2dcR4Xt%2FDBivt%2B9P15FUMnDDBpRXhyr%2Box62Y3h5GGJgd23HjJ7oy2cjj1rGDWVHkKxZK9fbaCKcT3s6Xd1CNUPyw2zyJYIJCspp79tFuWdhtD4Oi8nMey0liRRFIV%2BrS1zFXH5aCHx%2FDBcheaquqv0gPHcziKzm5cwDWbJ%2BbsROVnMakZ2xZML2iy7oGOrEBuULHGr4JJm2WgDodzFPOizyVvRnCtB8hSwmF8HKguMmsqhOh32X5c3WdpBHfHuNt5m3C8CnXcBMcJj%2B1Ap1W35XW0IBRBcFl79GX9E0M1Dywd1oOQkmGI8FnDmZWRZ%2FuD3BDoQ6ReX2vJjUVQe0Wx9zt8UYmKZ8OnwWiutgL1C%2FdkLYzyQGk%2FQkAVlDeTZUTf7QHg8umKSq1jtxsyXrBNATn5lV4yY9rnAYT8P0LjzP7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241206T113600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANYOE2BO%2F20241206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9af9c26e44e4b59b4ab5c1b6658064eafd778bb6599073fc8b75903242a844e6",
        width: 600,
        height: 600,
      },
    },
    dietLabels: ["High-Protein", "Low-Fat", "Low-Sodium"],
    healthLabels: [
      "Sugar-Conscious",
      "Low Sugar",
      "Low Potassium",
      "Kidney-Friendly",
      "Keto-Friendly",
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Dairy-Free",
      "Gluten-Free",
      "Wheat-Free",
      "Egg-Free",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Soy-Free",
      "Fish-Free",
      "Shellfish-Free",
      "Pork-Free",
      "Red-Meat-Free",
      "Crustacean-Free",
      "Celery-Free",
      "Mustard-Free",
      "Sesame-Free",
      "Lupine-Free",
      "Mollusk-Free",
      "Alcohol-Free",
      "No oil added",
      "Kosher",
    ],
    calories: 0.06,
    yield: 1,
    ingredientLines: [
      "2 teaspoons (6g) Japanese matcha green tea (see note above)",
      "8 ounces (235ml) cold water",
    ],
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.06,
        unit: "kcal",
      },
      FAT: {
        label: "Fat",
        quantity: 0,
        unit: "g",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0,
        unit: "g",
      },
      FATRN: {
        label: "Trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0,
        unit: "g",
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 0,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars",
        quantity: 0,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.010799999999999999,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium",
        quantity: 9.131847400000002,
        unit: "mg",
      },
      CA: {
        label: "Calcium",
        quantity: 6.80388555,
        unit: "mg",
      },
      MG: {
        label: "Magnesium",
        quantity: 2.3279618500000003,
        unit: "mg",
      },
      K: {
        label: "Potassium",
        quantity: 0.42,
        unit: "mg",
      },
      FE: {
        label: "Iron",
        quantity: 0.0012,
        unit: "mg",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.0232796185,
        unit: "mg",
      },
      P: {
        label: "Phosphorus",
        quantity: 0,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0,
        unit: "mg",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 0,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 232.56338881500005,
        unit: "g",
      },
    },
    source: "",
    url: "",
    shareAs: "",
    cautions: [],
    ingredients: [],
    totalCO2Emissions: 10,
    co2EmissionsClass: "A+",
    totalWeight: 100,
    cuisineType: [],
    mealType: [],
    dishType: [],
    totalDaily: {},
    digest: [],
    tags: [],
    glycemicIndex: 0,
    inflammatoryIndex: 0,
    instructions: [],
    externalId: "",
  },
  _links: {
    self: {
      title: "Self",
      href: "https://api.edamam.com/api/recipes/v2/4bb99424e1bbc40d3cd1d891883d6745?type=public",
    },
    next: {
      href: "",
      title: "",
    },
  },
};
