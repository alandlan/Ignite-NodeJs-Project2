import { ICategoriesRespository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategorySerice {
  constructor(private categoriesRepositories: ICategoriesRespository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists!");
    }

    this.categoriesRepositories.create({ name, description });
  }
}

export { CreateCategorySerice };
