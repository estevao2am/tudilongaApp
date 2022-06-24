import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {username,provincia,name,email, bairro,data_nascimento,phone,password } = request.body;

    const createUserService = new CreateUserService();
    const result = await createUserService.execute({provincia,username,name,email, bairro,data_nascimento,phone,password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
