import { Request, Response } from "express";
import { GetAllPostService } from "../services/GetAllPostService";

export class GetAllPostController {
  async handle(request: Request, response: Response) {
    const getAllPostService = new GetAllPostService();

    const post = await getAllPostService.execute();

    return response.json(post);
  }
}
