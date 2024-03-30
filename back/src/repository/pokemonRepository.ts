import pokemons from "../data/pokemons.json" with { type: "json" };
import { Pokemon } from "../types/pokemon";
import { Repository } from "../types/repository";

export class PokemonRepository implements Repository {
  private pokemons: Pokemon[] = pokemons;

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
    return this.pokemons as unknown as T[];
  }

  async getByName<T>(name: string): Promise<T> {
    return this.pokemons.find(
      (pokemon) => pokemon.name === name
    ) as unknown as T;
  }

  async deleteMany(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteOne(_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
