import { Turism } from "../entities/Turism";
import { TurismRepository } from "../repositories";

export class GetAllTurismService {
  async execute(): Promise<Turism[]> {
    const turism = await TurismRepository().find({relations:['user']});
    return turism;
  }
}
