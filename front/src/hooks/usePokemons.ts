import { useQuery } from "@tanstack/react-query";
import { PokemonService } from "@/services";
import { TIME_IN_MS } from "@/utils";

export const usePokemons = () => {
  const pokemonsQuery = useQuery({
    queryKey: ["pokemons"],
    queryFn: PokemonService.getAll,
    staleTime: Infinity,
  });

  const pokemonRandomQuery = useQuery({
    queryKey: ["pokemon", "random"],
    queryFn: PokemonService.getRandom,
    staleTime: TIME_IN_MS.DAY,
  });

  return {
    pokemons: {
      data: pokemonsQuery.data,
      isLoading: pokemonsQuery.isLoading,
      isError: pokemonsQuery.isError,
    },
    pokemonRandom: {
      data: pokemonRandomQuery.data,
      isLoading: pokemonRandomQuery.isLoading,
      isError: pokemonRandomQuery.isError,
    },
  };
};
