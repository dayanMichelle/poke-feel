import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

type InfoCardProps = {
  onOpen: () => void;
  backgroundImage: string;
  iconImage: string;
  title: string;
  subTitle: string;
  buttonLabel: string;
  size?: "xs" | "sm" | "md" | "lg";
};

export const InfoCard = ({
  onOpen,
  backgroundImage,
  iconImage,
  title,
  subTitle,
  buttonLabel,
  size = "sm",
}: InfoCardProps) => {
  const SIZES = {
    xs: "col-span-3",
    sm: "col-span-6",
    md: "col-span-9",
    lg: "col-span-12",
  };

  return (
    <Card
      isFooterBlurred
      className={`w-full h-[324px] col-span-12 sm:${SIZES[size]}`}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-secondary-600 uppercase font-bold">
          {subTitle}
        </p>
        <h4 className="text-secondary-900 font-medium text-xl">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        isBlurred
        alt="Relaxing app background"
        className="z-0 w-full h-full object-contain brightness-75"
        src={backgroundImage}
      />
      <CardFooter
        className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100
    w-full flex items-center justify-between"
      >
        <Image
          alt="Breathing app icon"
          className="w-10 h-11 object-contain"
          src={iconImage}
        />
        <Button
          radius="full"
          size="md"
          variant="ghost"
          color="success"
          onClick={onOpen}
        >
          {buttonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};
