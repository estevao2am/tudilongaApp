import { User} from "../entities/User";
import { UserRepository } from "../repositories";

export class GetAllUserService {
  async execute(): Promise<User[]> {
  // Exibindo o relacionamento do usuario com as permissões e papeis
    const user = await UserRepository().find({relations:['permissions','roles']});
    return user;
  }
}
