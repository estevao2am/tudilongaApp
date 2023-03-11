import { Request, Response } from "express";
import { CreateFinancieService } from "../services/CreateFinacieService";

export class CreateFinacieController {
  async handle(request: Request, response: Response) {
    const {value,category_id,name,data } = request.body;

    const createFinancieService = new CreateFinancieService();
    const result = await createFinancieService.execute({value,category_id,name,data  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
