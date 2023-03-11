import { Financies } from "../entities/Financies";
import { FinanciesRepository } from "../repositories";

type FinancieRequest = {
  name:string;
  value: Number;
  data: Date;
  category_id:string;


};

export class CreateFinancieService {
  async execute({category_id,value, name,data}: FinancieRequest): Promise<Error | Financies> {
    const existUser = await FinanciesRepository().findOne({ name });

    if (existUser) {
      return new Error("User already exists");
    }


    const financies = FinanciesRepository().create({name,data,category_id,value});

    await FinanciesRepository().save(financies);

    return financies;
  }
}
