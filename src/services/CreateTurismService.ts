import { TurismRepository, UserRepository } from "../repositories";

type TurismRequest = {
  name: string;
  content: string;
  localizacao:string;
  user_id:string;
  url:string
};

export class CreateTurismService {
  async execute({ name, content,localizacao,url,user_id }: TurismRequest) {
const userRepo = UserRepository()

if(!await userRepo.findOne(user_id)){
  return new Error("User Doen´t Exists")
}
    const turism = TurismRepository().create({
      name,
      content,
      localizacao,
      url,
      user_id
       
    });

    await TurismRepository().save(turism);

    return turism;
  }
}
