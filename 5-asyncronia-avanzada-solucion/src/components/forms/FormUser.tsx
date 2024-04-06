import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { usePokemons, useUser, useTrainers, useTheme } from "@/hooks";

type FormUserProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultName?: string;
  defaultPokemon?: string;
  defaultTrainer?: string;
};

export const FormUser = ({
  isOpen,
  onClose,
  defaultName,
  defaultPokemon,
  defaultTrainer,
}: FormUserProps) => {
  // TODO: 1. usar los valores por defecto para los campos del formulario
  const [name, setName] = useState(defaultName || "");
  const [pokemon, setPokemon] = useState(defaultPokemon || "");
  const [trainer, setTrainer] = useState(defaultTrainer || "");

  console.log({
    defaultName,
    defaultPokemon,
    defaultTrainer,
  });

  // TODO: 2. arreglar el custom hook usePokemons con data real
  const { pokemons } = usePokemons();

  // TODO: 3. arreglar el custom hook useTrainers con data real
  const { trainers } = useTrainers();
  const { user } = useUser();
  const [isDarkTheme] = useTheme();

  const theme = isDarkTheme ? "dark" : "light";

  const handleCreateUser = async () => {
    const data = {
      id: crypto.randomUUID(),
      name,
      pokemon,
      trainer,
    };
    user.create(data);
    onClose();
  };

  if (pokemons.isLoading || pokemons.isError) return null;
  if (trainers.isLoading || trainers.isError) return null;

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      className={`${theme} text-foreground bg-background`}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Elige tu PokeEntrenador
            </ModalHeader>
            <ModalBody>
              <Input
                type="text"
                label="Nombre"
                placeholder="Ash"
                isRequired
                value={name}
                onValueChange={setName}
                autoFocus
              />
              <Autocomplete
                label="Pokemon Favorito"
                placeholder="Selecciona un Pokemon"
                defaultItems={pokemons.data}
                isRequired
                selectedKey={pokemon}
                onSelectionChange={(key) => setPokemon(`${key}`)}
              >
                {(pokemon) => (
                  <AutocompleteItem key={pokemon.name} className="capitalize">
                    {pokemon.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>

              {/* // TODO: 4. usa una etiqueta nativa de HTML en lugar del Autocomplete para el input de entrenador */}
              <input
                list="trainers"
                placeholder="Selecciona un Entrenador"
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)}
                className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background h-14 py-2 is-filled"
              />
              <datalist id="trainers">
                {trainers?.data?.map((trainer) => (
                  <option key={trainer.name} value={trainer.name} />
                ))}
              </datalist>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                CERRAR
              </Button>
              <Button color="primary" onPress={handleCreateUser}>
                ENVIAR
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
