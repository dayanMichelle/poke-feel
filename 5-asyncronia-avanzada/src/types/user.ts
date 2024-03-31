import type { Pokemon, Trainer } from "@/types";

export type UserSimplified = {
  id: `${string}-${string}-${string}-${string}`;
  name: string;
  pokemon: string;
  trainer: string;
};

export type User = {
  id: `${string}-${string}-${string}-${string}`;
  name: string;
  pokemon: Pokemon;
  trainer: Trainer;
};
