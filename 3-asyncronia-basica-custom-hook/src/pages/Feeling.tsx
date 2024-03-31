import { useEffect, useState } from "react";
import { PokemonCard, InfoCard } from "@/components/cards";
import type { Pokemon, UserFeeling } from "@/types";

const FEELS: UserFeeling[] = [
  {
    pokemon: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      feeling: "alegre",
      sprites: {
        front_artwork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_showdown:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
      },
      type: "grass",
      color: "#4CAF50",
      id: "1",
    },
    date: "2024-03-23T21:26:58.828Z",
    id: "0da9e52e-b109-4c25-b354-1feb3a3f0ee4",
    resumen: "me sentí alegre",
  },
  {
    pokemon: {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
      feeling: "determinado",
      sprites: {
        front_artwork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        front_showdown:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif",
      },
      type: "grass",
      color: "#4CAF50",
      id: "2",
    },
    date: "2024-03-23T21:26:58.828Z",
    id: "0da9e52e-b109-4c25-b354-1feb3a3f0ea4",
    resumen: "me sentí alegre",
  },
];

export const Feeling = () => {
  // TODO: 2 convierte la logica del fetch del pokemon random en un custom hook
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

  // TODO: 1. traer el listado de PokeFeel del backend (GET /pokemon) y mapearlo

  // TODO: 3. si no hay pokemon random mostrar uno por defecto que está en src/data/pokemon.ts. (añadir la logica en el custom hook)
  const pokemonBackground = pokemonRandom?.sprites?.front_artwork;
  const pokemonIcon = pokemonRandom?.sprites?.front_showdown;

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

      {FEELS?.map((feelingItem) => (
        <PokemonCard feeling={feelingItem} key={feelingItem.id} />
      ))}
    </div>
  );
};
