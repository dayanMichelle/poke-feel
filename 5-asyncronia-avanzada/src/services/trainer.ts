import { axiosApi } from "@/api";
import type { Trainer } from "@/types";

export class TrainerService {
  static async getAll(): Promise<Trainer[]> {
    const { data } = await axiosApi.get("/trainer");
    return data;
  }
}
