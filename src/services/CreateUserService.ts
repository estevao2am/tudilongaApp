import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";

type UserRequest = {
  name:string;
  username: string;
  password: string;
};

export class CreateUserService {
  async execute({name,password, username }: UserRequest): Promise<Error | User> {
    const existUser = await UserRepository().findOne({ username });

    if (existUser) {
      return new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = UserRepository().create({name,username, password: passwordHash });

    await UserRepository().save(user);

    return user;
  }
}
