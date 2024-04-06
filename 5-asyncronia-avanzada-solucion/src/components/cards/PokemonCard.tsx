import { Card, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react";
import type { UserFeeling } from "@/types";

type PokemonCardProps = {
  feeling: UserFeeling;
};

export const PokemonCard = ({ feeling }: PokemonCardProps) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-full max-w-[280px] h-[324px] col-span-12 xs:col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <CardHeader
        className={`border-none rounded-t-lg`}
        style={{
          backgroundColor: feeling.pokemon.color,
        }}
      >
        <h4 className="text-white text-center w-full text-sm uppercase">
          {feeling.pokemon.name}{" "}
          <span className="text-white/70 text-xs">#{feeling.pokemon.id}</span>
        </h4>
      </CardHeader>
      <Image
        alt={`Image of a pokemon named ${feeling.pokemon.name}`}
        className="w-full max-w-[280px] h-full object-contain brightness-75"
        src={feeling.pokemon.sprites.front_artwork}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-center w-full uppercase">
          {feeling.pokemon.feeling}
        </p>
        <Chip color="warning" variant="shadow" className="text-xs" size="sm">
          {new Date(feeling.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Chip>
      </CardFooter>
    </Card>
  );
};
