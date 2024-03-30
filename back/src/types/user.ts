import { UUID } from "crypto";
import { Pokemon } from "./pokemon";
import { Trainer } from "./trainer";

export type User = {
  id: UUID;
  name: string;
  pokemon: Pokemon;
  trainer: Trainer;
};

export type UserSimplified = {
  id: UUID;
  name: string;
  pokemon: string;
  trainer: string;
};
