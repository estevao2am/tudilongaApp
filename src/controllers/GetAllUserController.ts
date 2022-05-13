import { Request, Response } from "express";
import { GetAllUserService } from "../services/GetAllUserService";

export class GetAllUserController {
  async handle(request: Request, response: Response) {
    const getAllUserService = new GetAllUserService();

    const user = await getAllUserService.execute();

    return response.json(user);
  }
}
