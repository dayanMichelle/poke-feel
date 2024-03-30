import { Router } from "express";

import { QuestionController } from "../controllers/question.controller";
import { QuestionService } from "../services/question.service";
import { QuestionRepository } from "../repository/questionRepository";

export const routerQuestion = Router();

const questionRepository = new QuestionRepository();
const questionService = new QuestionService(questionRepository);
const questionController = new QuestionController(questionService);

routerQuestion.get("/", async function (req, res) {
  const { random, limit } = req.query;

  const randomBoolean = random === "true";
  const limitNumber = parseInt(limit?.toString() ?? "5");

  const data = await questionController.getQuestions({
    random: randomBoolean,
    limit: limitNumber,
  });
  res.json(data);
});
