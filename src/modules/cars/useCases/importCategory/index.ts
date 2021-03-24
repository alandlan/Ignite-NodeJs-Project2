import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCategory = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCategory
);

export { importCategoryController };
