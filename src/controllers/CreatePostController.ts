import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, content } = request.body;

    const createPostService = new CreatePostService();
  
    const post = await createPostService.execute({
      title,
      content,
      
    });

    return response.json(post);
  }
}
