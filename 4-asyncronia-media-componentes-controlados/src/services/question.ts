import { axiosApi } from "@/api";
import type { Question } from "@/types";

type GetAllParams = {
  limit?: number;
  random?: boolean;
};

export class QuestionService {
  static async getAll({ limit, random }: GetAllParams = {}): Promise<
    Question[]
  > {
    const { data } = await axiosApi.get("/question", {
      params: { limit, random },
    });
    return data;
  }
}
