import { Router } from "express";

import { TrainerController } from "../controllers/trainer.controller";
import { TrainerRepository } from "../repository/trainerRepository";
import { TrainerService } from "../services/trainer.service";

export const routerTrainer = Router();

const trainerRepository = new TrainerRepository();
const trainerService = new TrainerService(trainerRepository);
const trainerController = new TrainerController(trainerService);

routerTrainer.get("/", async function (_, res) {
  const data = await trainerController.getTrainers();
  res.json(data);
});
