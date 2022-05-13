import { User} from "../entities/User";
import { UserRepository } from "../repositories";

export class GetAllUserService {
  async execute(): Promise<User[]> {
    const user = await UserRepository().find();
    return user;
  }
}
