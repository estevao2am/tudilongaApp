import { Post } from "../entities/Post";
import { PostRepository } from "../repositories";

export class GetAllPostService {
  async execute(): Promise<Post[]> {
    const products = await PostRepository().find();
    return products;
  }
}
