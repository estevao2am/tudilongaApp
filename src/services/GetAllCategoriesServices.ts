import {Category  } from "../entities/Category";
import { CategoryRepository } from "../repositories";

export class GetAllCategoriesService {
  async execute(): Promise<Category[]> {
    const category = await CategoryRepository().find();
    return category;
  }
}
