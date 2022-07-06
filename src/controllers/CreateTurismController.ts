import { Request, Response } from "express";
import { CreateTurismService } from "../services/CreateTurismService";

export class CreateTurismController {
  async handle(request: Request, response: Response) {

    const { name, content,localizacao,user_id } = request.body;
    const {filename} = request.file
    const createTurismService = new CreateTurismService();
  
    const turism = await createTurismService.execute({
      name,
      content,
      localizacao,
      url:filename,
      user_id
      
    });

    return response.json(turism);
  }
}
