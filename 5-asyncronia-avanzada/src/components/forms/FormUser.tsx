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
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [trainer, setTrainer] = useState("");

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

  if (pokemons.isLoading) return null;
  if (trainers.isLoading) return null;

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
              <Autocomplete
                label="Entrenador Favorito"
                placeholder="Selecciona un Entrenador"
                defaultItems={trainers?.data}
                isRequired
                selectedKey={trainer}
                onSelectionChange={(key) => setTrainer(`${key}`)}
              >
                {(trainer) => (
                  <AutocompleteItem key={trainer.name} className="capitalize">
                    {trainer.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
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
