import { useEffect, useState } from "react";
import { PokemonCard, InfoCard } from "@/components/cards";
import { usePokemonRandom } from "@/hooks/usePokemonRandom";
import { DEFAULT_POKEMON } from "@/data";
import type { UserFeeling } from "@/types";

export const Feeling = () => {
  // TODO: 2 convierte la logica del fetch del pokemon random en un custom hook
  const { pokemonRandom } = usePokemonRandom();
  // TODO: 1. traer el listado de PokeFeel del backend (GET /feeling) y mapearlo
  const [userFeeling, setUserFeeling] = useState<UserFeeling[]>([]);

  useEffect(() => {
    const fetchUserFeeling = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_URL + "/feeling"
        );
        if (!response.ok) {
          throw new Error("Error fetching feeling");
        }
        const data = await response.json();
        setUserFeeling(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserFeeling();
  }, []);

  // TODO: 3. si no hay pokemon random mostrar uno por defecto que está en src/data/pokemon.ts
  const pokemonBackground =
    pokemonRandom?.sprites?.front_artwork ||
    DEFAULT_POKEMON.sprites.front_artwork;
  const pokemonIcon =
    pokemonRandom?.sprites?.front_showdown ||
    DEFAULT_POKEMON.sprites.front_showdown;

  return (
    <div className="gap-3 gap-y-6 content-center justify-items-center grid grid-cols-12 justify-center p-4 w-full max-w-[1200px] mx-auto">
      <InfoCard
        onOpen={() => alert("open")}
        backgroundImage={pokemonBackground || ""}
        iconImage={pokemonIcon || ""}
        subTitle="tu historial de PokeFeels"
        title="Aquí tienes los pokemons que se adaptan a tu sentimiento"
        buttonLabel="Crea tu PokeFeel"
      />

      {userFeeling?.map((feelingItem) => (
        <PokemonCard feeling={feelingItem} key={feelingItem.id} />
      ))}
    </div>
  );
};
