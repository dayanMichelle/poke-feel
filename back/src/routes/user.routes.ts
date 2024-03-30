import { Router } from "express";

import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { JSONRepository } from "../repository/jsonRepository";
import { PokemonRepository } from "../repository/pokemonRepository";
import { TrainerRepository } from "../repository/trainerRepository";

export const routerUser = Router();

const jsonRepository = new JSONRepository({
  fileName: "user.json",
  directory: "./src/data",
});
const pokemonRepository = new PokemonRepository();
const trainerRepository = new TrainerRepository();

const userService = new UserService(
  jsonRepository,
  pokemonRepository,
  trainerRepository
);
const userController = new UserController(userService);

routerUser.post("/", async function (req, res) {
  const { id, name, pokemon, trainer } = req.body;
  const user = await userController.createUser({
    id,
    name,
    pokemon,
    trainer,
  });

  res.json(user).status(201);
});

routerUser.get("/", async function (_req, res) {
  const user = await userController.getUsers();

  res.json(user);
});
