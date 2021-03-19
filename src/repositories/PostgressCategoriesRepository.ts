import { Category } from "../model/category";
import {
  ICategoriesRespository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgressCategoriesRepository implements ICategoriesRespository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgressCategoriesRepository };
