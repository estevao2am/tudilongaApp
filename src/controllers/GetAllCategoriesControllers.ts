import { Request, Response } from "express";
import {  GetAllCategoriesService } from "../services/GetAllCategoriesServices";

export class  GetAllCategoryController {
  async handle(request: Request, response: Response) {
    const  getAllCategoryService = new GetAllCategoriesService();

    const categories = await  getAllCategoryService.execute();
    return response.json(categories);

  }
}

