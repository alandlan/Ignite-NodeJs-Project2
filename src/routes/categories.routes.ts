import { Router } from "express";

import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategorySerice } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategorySerice(
    categoriesRepositories
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepositories.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };
