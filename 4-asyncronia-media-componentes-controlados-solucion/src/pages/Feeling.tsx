import { useEffect, useState } from "react";
import { PokemonCard, InfoCard } from "@/components/cards";
import { FeelingService, PokemonService } from "@/services";
import { DEFAULT_POKEMON } from "@/data";
import { Pokemon, UserFeeling } from "@/types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils";

export const Feeling = () => {
  const [pokemonRandom, setPokemonRandom] = useState<Pokemon>();
  const [pokeFeels, setPokeFeels] = useState<UserFeeling[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const data = await PokemonService.getRandom();
        setPokemonRandom(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomPokemon();
  }, []);

  // TODO: 2. usar service para traer los PokeFeels src/services/feeling.ts
  useEffect(() => {
    const fetchFeeling = async () => {
      try {
        const data = await FeelingService.getAll();
        setPokeFeels(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeeling();
  }, []);

  const pokemonBackground =
    pokemonRandom?.sprites?.front_artwork ||
    DEFAULT_POKEMON.sprites.front_artwork;
  const pokemonIcon =
    pokemonRandom?.sprites?.front_showdown ||
    DEFAULT_POKEMON.sprites.front_showdown;

  return (
    <div className="gap-3 gap-y-6 content-center justify-items-center grid grid-cols-12 justify-center p-4 w-full max-w-[1200px] mx-auto">
      <InfoCard
        // TODO: 3. en lugar de mostrar el alert, redirigir a la página de /create-poke-feel con react router dom link:https://reactrouter.com/en/main/hooks/use-navigate
        onOpen={() => navigate(ROUTES.questions)}
        backgroundImage={pokemonBackground}
        iconImage={pokemonIcon}
        subTitle="tu historial de PokeFeels"
        title="Aquí tienes los pokemons que se adaptan a tu sentimiento"
        buttonLabel="Crea tu PokeFeel"
      />
      {pokeFeels?.map((feelingItem) => (
        <PokemonCard feeling={feelingItem} key={feelingItem.id} />
      ))}
    </div>
  );
};
