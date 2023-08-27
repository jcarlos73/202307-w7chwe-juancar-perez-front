import { Robot } from "../types";

export const robotsMock: Robot[] = [
  {
    _id: "1",
    name: "Bender",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
    speed: 3,
    endurance: 4,
  },
  {
    _id: "2",
    name: "WALL-E",
    imageUrl:
      "https://e1.pngegg.com/pngimages/89/218/png-clipart-wall-e-wall-e-character-thumbnail.png",
    speed: 2,
    endurance: 7,
  },
];

export const robotMock: Robot = {
  _id: "3",
  name: "R2D2",
  imageUrl:
    "https://cdn.pixabay.com/photo/2022/06/04/20/20/r2-d2-7242774_960_720.png",
  speed: 2,
  endurance: 6,
};
