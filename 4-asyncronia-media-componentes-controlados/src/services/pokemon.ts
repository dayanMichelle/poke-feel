import { axiosApi } from "@/api";
import type { Pokemon } from "@/types";

export class PokemonService {
  static async getAll(): Promise<Pokemon[]> {
    const { data } = await axiosApi.get("/pokemon");
    return data;
  }

  // TODO: 1. arreglar metodo para que funcione correctamente (/pokemon/random)
  static async getRandom(): Promise<Pokemon> {}
}
