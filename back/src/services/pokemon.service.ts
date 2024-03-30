import { Pokemon } from "../types/pokemon";
import { Repository } from "../types/repository";

export class PokemonService {
  private pokemonRepository: Repository;

  constructor(pokemonRepository: Repository) {
    this.pokemonRepository = pokemonRepository;
  }

  public async getPokemons(): Promise<Pokemon[]> {
    return await this.pokemonRepository.getAll<Pokemon>();
  }

  public async getRandomPokemon(): Promise<Pokemon> {
    const pokemons = await this.getPokemons();
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
  }
}
