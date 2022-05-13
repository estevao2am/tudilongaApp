import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {name, username, password } = request.body;

    const createUserService = new CreateUserService();
    const result = await createUserService.execute({name,username, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
