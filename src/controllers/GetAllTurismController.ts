import { Request, Response } from "express";
import { GetAllTurismService } from "../services/GetAllTurismService";

export class GetAllTurismController {
  async handle(request: Request, response: Response) {
    const getAllTurismService = new GetAllTurismService();

    const post = await getAllTurismService.execute();

    return response.json(post);
  }
}
