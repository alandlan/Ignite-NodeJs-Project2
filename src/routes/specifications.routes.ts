import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
