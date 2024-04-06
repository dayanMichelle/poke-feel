import { axiosApi } from "@/api";
import type { User, UserSimplified } from "@/types";

export class UserService {
  static async create(params: UserSimplified): Promise<User> {
    const { data } = await axiosApi.post<User>("/user", params);
    return data;
  }

  static async get(): Promise<User> {
    const { data } = await axiosApi.get<User>("/user");
    return data;
  }
}
