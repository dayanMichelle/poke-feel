import type { Pokemon } from "@/types";

export type Feeling =
  | "alegre"
  | "determinado"
  | "majestuoso"
  | "enérgico"
  | "audaz"
  | "poderoso"
  | "juguetón"
  | "leal"
  | "imparable"
  | "curioso"
  | "evolucionando"
  | "libre"
  | "inquieto"
  | "en desarrollo"
  | "astuto"
  | "experto"
  | "agresivo"
  | "dominante"
  | "sigiloso"
  | "feroz"
  | "carismático"
  | "energético"
  | "defensivo"
  | "firme"
  | "delicado"
  | "elegante"
  | "imponente"
  | "reservado"
  | "valiente"
  | "encantador"
  | "misterioso"
  | "adorable"
  | "afable"
  | "melancólico"
  | "fascinante"
  | "trabajador"
  | "dedicado"
  | "cauteloso"
  | "unido"
  | "confundido"
  | "sereno"
  | "temperamental"
  | "furioso"
  | "determined"
  | "intelectual"
  | "fuerte"
  | "hambriento"
  | "voraz"
  | "devorador"
  | "robusto"
  | "fogoso"
  | "tranquilo"
  | "relajado"
  | "electrizante"
  | "honorario"
  | "dúo dinámico"
  | "ágil"
  | "inocente"
  | "gentil"
  | "viscoso"
  | "toxico"
  | "concha protectora"
  | "espeluznante"
  | "travieso"
  | "colosal"
  | "soñoliento"
  | "hipnotizador"
  | "explosivo";

export type UserFeeling = {
  pokemon: Pokemon;
  date: string;
  resumen: string;
  id: `${string}-${string}-${string}-${string}-${string}`;
};
