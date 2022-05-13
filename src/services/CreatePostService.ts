import { PostRepository } from "../repositories";

type PostRequest = {
  title: string;
  content: string;
};

export class CreatePostService {
  async execute({ title, content }: PostRequest) {
    const post = PostRepository().create({
      title,
      content,
      
    });

    await PostRepository().save(post);

    return post;
  }
}
