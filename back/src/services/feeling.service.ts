import type { AxiosInstance } from "axios";

import { findBestSimilarity } from "../utils/string";
import { shuffle } from "../utils/array";

import type { Repository } from "../types/repository";
import type { Pokemon } from "../types/pokemon";
import type { Answer, Question } from "../types/question";
import type { UserFeeling } from "../types/feeling";

import feelings from "../data/feelings.json" with { type: "json" };
import pokemons from "../data/pokemons.json" with { type: "json" };

type CreateFeelingRequest = {
  answers: Question[] & Answer[];
};

export class FeelingService {
  private userFeelingRepository: Repository;
  private aiAPI: AxiosInstance;

  constructor(userFeelingRepository: Repository, aiAPI: AxiosInstance) {
    this.userFeelingRepository = userFeelingRepository;
    this.aiAPI = aiAPI;
  }

  public async createFeeling({
    answers,
  }: CreateFeelingRequest): Promise<UserFeeling> {
    const content = JSON.stringify(answers);

    const { data } = await this.aiAPI.post("", { content });

    const feeling = findBestSimilarity(data.result, feelings);
    const pokemon = await this.getPokemonByFeeling(feeling);

    const result = {
      pokemon,
      date: new Date().toISOString(),
      id: crypto.randomUUID(),
      resumen: "me sentí alegre",
    };

    await this.userFeelingRepository.add<UserFeeling>(result);
    return result;
  }

  public async getFeelings(): Promise<UserFeeling[]> {
    return await this.userFeelingRepository.getAll<UserFeeling>();
  }

  public async deleteFeelings(): Promise<void> {
    await this.userFeelingRepository.deleteMany();
  }

  public async deleteFeeling(id: string): Promise<void> {
    await this.userFeelingRepository.deleteOne<UserFeeling>(id);
  }

  public setAiAPI(aiAPI: AxiosInstance) {
    this.aiAPI = aiAPI;
  }

  private async getPokemonByFeeling(feeling: string): Promise<Pokemon> {
    const pokemonsByFeeling = pokemons.filter(
      (pokemon) =>
        pokemon.feeling.toLowerCase().trim() === feeling.toLowerCase().trim()
    );

    const randomPokemon = shuffle(pokemonsByFeeling)[0];

    if (!randomPokemon) {
      throw new Error("Pokemon not found");
    }

    return randomPokemon;
  }
}
