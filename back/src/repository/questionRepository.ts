import questions from "../data/questions.json" with { type: "json" };
import { Question } from "../types/question";
import { Repository } from "../types/repository";

export class QuestionRepository implements Repository {
  private questions: Question[] = questions;

  get<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create<T>(_element: T): Promise<T> {
    throw new Error("Method not implemented.");
  }

  async add<T>(_element: T): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getAll<T>(): Promise<T[]> {
    return this.questions as unknown as T[];
  }

  async deleteMany(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteOne(_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getByName<T>(_name: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
