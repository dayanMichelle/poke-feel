import { Repository } from "../types/repository";
import { Trainer } from "../types/trainer";

export class TrainerService {
  private trainerRepository: Repository;

  constructor(trainerRepository: Repository) {
    this.trainerRepository = trainerRepository;
  }

  public async getTrainers(): Promise<Trainer[]> {
    return await this.trainerRepository.getAll<Trainer>();
  }
}
