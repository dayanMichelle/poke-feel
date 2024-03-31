import { useQuery } from "@tanstack/react-query";
import { PokemonService } from "@/services";
import { TIME_IN_MS } from "@/utils";
import { DEFAULT_POKEMON } from "@/data";

export const usePokemons = () => {
  //  usa este valor como caché: staleTime: Infinity,

  const pokemonRandomQuery = useQuery({
    queryKey: ["pokemon", "random"],
    queryFn: PokemonService.getRandom,
    staleTime: TIME_IN_MS.DAY,
  });

  return {
    pokemons: {
      data: [DEFAULT_POKEMON],
      isLoading: false,
      isError: false,
    },
    pokemonRandom: {
      data: pokemonRandomQuery.data,
      isLoading: pokemonRandomQuery.isLoading,
      isError: pokemonRandomQuery.isError,
    },
  };
};
