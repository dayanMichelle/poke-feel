import express from "express";
import cors from "cors";
import "dotenv/config";

import { routerPokemon } from "./routes/pokemon.routes";
import { routerQuestion } from "./routes/question.routes";
import { routerFeeling } from "./routes/feeling.routes";
import { routerUser } from "./routes/user.routes";
import { routerTrainer } from "./routes/trainer.routes";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/pokemon", routerPokemon);
app.use("/question", routerQuestion);
app.use("/feeling", routerFeeling);
app.use("/user", routerUser);
app.use("/trainer", routerTrainer);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
