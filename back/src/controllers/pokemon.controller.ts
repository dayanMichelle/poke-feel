import { PokemonService } from "../services/pokemon.service";

export class PokemonController {
  private pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  public async getPokemons() {
    const data = await this.pokemonService.getPokemons();
    return data;
  }

  public async getRandomPokemon() {
    const data = await this.pokemonService.getRandomPokemon();
    return data;
  }
}
