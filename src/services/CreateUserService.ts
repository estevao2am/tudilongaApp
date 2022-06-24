import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";

type UserRequest = {
  name:string;
  email: string;
  password: string;
  data_nascimento:string;
  username:string;
  phone:Number;
  bairro:string
  provincia:string

};

export class CreateUserService {
  async execute({provincia,bairro,data_nascimento,phone,username,name,password, email }: UserRequest): Promise<Error | User> {
    const existUser = await UserRepository().findOne({ email });

    if (existUser) {
      return new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = UserRepository().create({provincia,username,name,email, bairro,data_nascimento,phone,password: passwordHash });

    await UserRepository().save(user);

    return user;
  }
}
