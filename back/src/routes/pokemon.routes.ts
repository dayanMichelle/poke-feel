import { Router } from "express";

import { PokemonController } from "../controllers/pokemon.controller";
import { PokemonService } from "../services/pokemon.service";
import { PokemonRepository } from "../repository/pokemonRepository";

export const routerPokemon = Router();

const pokemonRepository = new PokemonRepository();
const pokemonService = new PokemonService(pokemonRepository);
const pokemonController = new PokemonController(pokemonService);

routerPokemon.get("/", async function (_, res) {
  const data = await pokemonController.getPokemons();
  res.json(data);
});

routerPokemon.get("/random", async function (_, res) {
  const data = await pokemonController.getRandomPokemon();
  res.json(data);
});
