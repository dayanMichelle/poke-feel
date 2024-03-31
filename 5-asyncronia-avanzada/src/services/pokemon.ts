import { axiosApi } from "@/api";
import type { Pokemon } from "@/types";

export class PokemonService {
  static async getAll(): Promise<Pokemon[]> {
    const { data } = await axiosApi.get("/pokemon");
    return data;
  }

  static async getRandom(): Promise<Pokemon> {
    const { data } = await axiosApi.get("/pokemon/random");
    return data;
  }
}
