import { shuffle } from "../utils/array";
import { Repository } from "../types/repository";
import { Question } from "../types/question";

type GetQuestionsParams = {
  random: boolean;
  limit: number;
};

export class QuestionService {
  private questionRepository: Repository;

  constructor(questionRepository: Repository) {
    this.questionRepository = questionRepository;
  }

  public async getQuestions({
    random = false,
    limit = 5,
  }: GetQuestionsParams): Promise<Question[]> {
    const questions = await this.questionRepository.getAll<Question>();

    const maxLimit = questions.length;
    const newLimit = limit > maxLimit ? maxLimit : limit;

    const shuffleQuestions = random ? shuffle(questions) : questions;
    const limitQuestions = shuffleQuestions.slice(0, newLimit);

    return limitQuestions;
  }
}
