import trainers from "../data/trainers.json" with { type: "json" };
import { Repository } from "../types/repository";
import { Trainer } from "../types/trainer";

export class TrainerRepository implements Repository {
  private trainers: Trainer[] = trainers;

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
    return this.trainers as unknown as T[];
  }

  async getByName<T>(name: string): Promise<T> {
    return this.trainers.find(
      (trainer) => trainer.name === name
    ) as unknown as T;
  }

  async deleteMany(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteOne(_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
