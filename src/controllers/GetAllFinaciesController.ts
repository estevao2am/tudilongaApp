import { Request, Response } from "express";
import { GetAllFinanciesService } from "../services/GetAllFinanciesService";

export class GetAllFinaciesController {
  async handle(request: Request, response: Response) {
    const getAllFinanciesService = new GetAllFinanciesService();
 
   

    const financies = await getAllFinanciesService.execute();

    return response.json(financies);
  }
}
