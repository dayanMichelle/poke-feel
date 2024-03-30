import { FeelingService } from "../services/feeling.service";
import { ModelAI } from "../api/modelAI";
import { Answer, Question } from "../types/question";

type CreateFeeling = {
  answers: Question[] & Answer[];
  model: string;
};

export class FeelingController {
  private feelingService: FeelingService;

  constructor(feelingService: FeelingService) {
    this.feelingService = feelingService;
  }

  public async createFeeling({ answers, model }: CreateFeeling) {
    const modelAI = new ModelAI(model);
    this.feelingService.setAiAPI(modelAI.getAPI());

    const data = await this.feelingService.createFeeling({
      answers,
    });

    return data;
  }

  public async getFeelings() {
    const data = await this.feelingService.getFeelings();
    return data;
  }

  public async deleteFeelings() {
    await this.feelingService.deleteFeelings();
    return [];
  }

  public async deleteFeeling({ id }: { id: string }) {
    await this.feelingService.deleteFeeling(id);
    return { id };
  }
}
