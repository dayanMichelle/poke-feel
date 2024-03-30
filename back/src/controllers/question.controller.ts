import { QuestionService } from "../services/question.service";

type GetQuestionsParams = {
  random?: boolean | undefined;
  limit?: number | undefined;
};

export class QuestionController {
  private questionService: QuestionService;

  constructor(questionService: QuestionService) {
    this.questionService = questionService;
  }

  public async getQuestions({ random = false, limit = 5 }: GetQuestionsParams) {
    const data = await this.questionService.getQuestions({
      random,
      limit,
    });

    return data;
  }
}
