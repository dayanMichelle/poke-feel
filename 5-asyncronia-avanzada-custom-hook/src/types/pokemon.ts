export type Pokemon = {
  name: string;
  url: string;
  feeling: string;
  sprites: Sprites;
  type: string;
  color: string;
  id: string;
};

type Sprites = {
  front_artwork: string;
  front_default: string;
  front_showdown: string;
};
