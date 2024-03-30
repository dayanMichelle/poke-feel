import { TrainerService } from "../services/trainer.service";

export class TrainerController {
  private trainerService: TrainerService;

  constructor(trainerService: TrainerService) {
    this.trainerService = trainerService;
  }

  public async getTrainers() {
    const data = await this.trainerService.getTrainers();
    return data;
  }
}
