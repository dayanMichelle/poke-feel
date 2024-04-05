import { useEffect, useState } from "react";
import type { Pokemon } from "@/types";

export const usePokemonRandom = () => {
  const [pokemonRandom, setPokemonRandom] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_URL + "/pokemon/random"
        );
        if (!response.ok) {
          throw new Error("Error fetching pokemon");
        }
        const data = await response.json();
        setPokemonRandom(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, []);

  return {
    pokemonRandom,
  };
};
