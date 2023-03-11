import { Financies} from "../entities/Financies";
import { FinanciesRepository } from "../repositories";


export class GetAllFinanciesService {
  async execute(): Promise<Financies[]> {

    
  // Exibindo o relacionamento do usuario com as permissões e papeis
    const financie = await FinanciesRepository().find({relations:['category']});
    return financie;
  }
}
