import { Card, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";

export const PokemonCardSkeleton = () => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-full max-w-[280px] h-[324px] col-span-12 xs:col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 shadow-2xl"
    >
      <CardHeader className={`border-none rounded-t-lg`}>
        <h4 className="text-white text-center w-full text-sm uppercase">
          <Skeleton className="w-full h-3" />
        </h4>
      </CardHeader>
      <Skeleton className="w-full max-w-[280px] h-full" />
      <CardFooter className="before:bg-white border-white border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <h4 className="text-white text-center w-full text-sm uppercase">
          <Skeleton className="w-full h-4" />
        </h4>
      </CardFooter>
    </Card>
  );
};
