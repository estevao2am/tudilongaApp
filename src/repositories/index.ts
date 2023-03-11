import { Financies } from "../entities/Financies";
import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export const FinanciesRepository = () => {
  return getRepository(Financies);
};

export const CategoryRepository = () => {
  return getRepository(Category);
};


// Normal User Session

