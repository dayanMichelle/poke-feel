import { useNavigate } from "react-router-dom";

import { PokemonCard, InfoCard } from "@/components/cards";
import { useFeeling, usePokemons } from "@/hooks";
import { DEFAULT_POKEMON } from "@/data";
import { ROUTES } from "@/utils";

export const Feeling = () => {
  const { feeling } = useFeeling();
  const { pokemonRandom } = usePokemons();
  const navigate = useNavigate();

  if (feeling.isLoading) return <div>Loading...</div>;
  if (!feeling.data) return <div>empty state</div>;

  const pokemonBackground =
    pokemonRandom.data?.sprites?.front_artwork ||
    DEFAULT_POKEMON.sprites.front_artwork;
  const pokemonIcon =
    pokemonRandom.data?.sprites?.front_showdown ||
    DEFAULT_POKEMON.sprites.front_showdown;

  return (
    <div className="gap-3 gap-y-6 content-center justify-items-center grid grid-cols-12 justify-center p-4 w-full max-w-[1200px] mx-auto">
      <InfoCard
        onOpen={() => navigate(`${ROUTES.questions}?isOpenModal=true`)}
        backgroundImage={pokemonBackground}
        iconImage={pokemonIcon}
        subTitle="tu historial de PokeFeels"
        title="Aquí tienes los pokemons que se adaptan a tu sentimiento"
        buttonLabel="Crea tu PokeFeel"
      />
      {feeling?.data?.map((feelingItem) => (
        <PokemonCard feeling={feelingItem} key={feelingItem.id} />
      ))}
    </div>
  );
};
