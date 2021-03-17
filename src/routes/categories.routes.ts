import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesCategoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesCategoriesRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesCategoriesRepositories.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };
