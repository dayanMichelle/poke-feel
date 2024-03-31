import { useDisclosure } from "@nextui-org/react";

import { InfoCard } from "@/components/cards";
import { FormUser } from "@/components/forms";
import { useUser } from "@/hooks";
import { DEFAULT_POKEMON, DEFAULT_TRAINER } from "@/data";

export const Trainer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultOpen: false });
  const { user } = useUser();

  const trainerImage =
    user?.data?.trainer?.sprites?.front_artwork ||
    DEFAULT_TRAINER.sprites.front_artwork;

  const pokemonIcon =
    user?.data?.pokemon?.sprites?.front_showdown ||
    DEFAULT_POKEMON.sprites.front_showdown;

  const subtitle = user?.data ? user?.data?.name : "Completa tu perfil";
  const title = user?.data
    ? "Actualiza tu información"
    : "Ingresa tu información";

  if (user.isLoading) return null;

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 pt-12 sm:p-8 max-w-[1200px] mx-auto">
        <InfoCard
          onOpen={onOpen}
          backgroundImage={trainerImage}
          iconImage={pokemonIcon}
          subTitle={subtitle}
          title={title}
          buttonLabel="Llena tu información"
          size="xs"
        />
      </div>
      <FormUser
        isOpen={isOpen}
        onClose={onClose}
        defaultName={user?.data?.name}
        defaultPokemon={user?.data?.pokemon?.name}
        defaultTrainer={user?.data?.trainer?.name}
      />
    </>
  );
};
