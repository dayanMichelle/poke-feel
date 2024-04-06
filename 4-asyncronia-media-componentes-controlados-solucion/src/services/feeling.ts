import { axiosApi } from "@/api";
import type { QuestionWithAnswers, UserFeeling, Model } from "@/types";

type CreateParams = {
  answers: QuestionWithAnswers[];
  model: Model;
};

type DeleteAllParams = {
  id: string;
};

export class FeelingService {
  static async create(params: CreateParams): Promise<UserFeeling> {
    const { data } = await axiosApi.post<UserFeeling>("/feeling", params);
    return data;
  }

  static async getAll(): Promise<UserFeeling[]> {
    const { data } = await axiosApi.get<UserFeeling[]>("/feeling");
    return data;
  }

  static async deleteAll(): Promise<void> {
    await axiosApi.delete("/feeling");
  }

  static async deleteOne({ id }: DeleteAllParams): Promise<void> {
    await axiosApi.delete(`/feeling/${id}`);
  }
}
