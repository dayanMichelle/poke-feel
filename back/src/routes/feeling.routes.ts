import { Router } from "express";

import { FeelingController } from "../controllers/feeling.controller";
import { FeelingService } from "../services/feeling.service";
import { JSONRepository } from "../repository/jsonRepository";
import { ModelAI } from "../api/modelAI";

export const routerFeeling = Router();

const jsonRepository = new JSONRepository({
  fileName: "user_feelings.json",
  directory: "./src/data",
});

const modelAI = new ModelAI("cohereChat");
const feelingService = new FeelingService(jsonRepository, modelAI.getAPI());
const feelingController = new FeelingController(feelingService);

routerFeeling.post("/", async function (req, res) {
  const data = await feelingController.createFeeling({
    answers: req.body.answers,
    model: req.body.model,
  });

  res.json(data);
});

routerFeeling.get("/", async function (_, res) {
  const data = await feelingController.getFeelings();
  res.json(data);
});

routerFeeling.delete("/", async function (_, res) {
  await feelingController.deleteFeelings();
  res.json([]);
});

routerFeeling.delete("/:id", async function (req, res) {
  const id = req.params.id;
  await feelingController.deleteFeeling({ id });
  res.json({ id });
});
