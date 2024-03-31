import { useDisclosure } from "@nextui-org/react";

import { FormQuestions } from "@/components/forms";
import { InfoCard } from "@/components/cards";
import { DEFAULT_POKEMON } from "@/data";

export const Questions = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultOpen: false });

  const pokemonBackground = DEFAULT_POKEMON.sprites.front_artwork;
  const pokemonIcon = DEFAULT_POKEMON.sprites.front_showdown;

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 sm:p-8 sm:pt-12 max-w-[1200px] mx-auto">
        <InfoCard
          onOpen={onOpen}
          backgroundImage={pokemonBackground}
          iconImage={pokemonIcon}
          subTitle="contesta como te sientes hoy"
          title="Obtén el pokemon que se adapte a tu sentimiento"
          buttonLabel="Crea tu PokeFeel"
          size="xs"
        />
      </div>
      <FormQuestions isOpen={isOpen} onClose={onClose} />
    </>
  );
};
