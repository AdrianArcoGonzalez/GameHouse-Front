import { Game, ProtoGame } from "../interfaces/interfaces";

export const mockGame: Game = {
  category: "MOBA",
  id: "46546549874123",
  company: "Riot",
  dislikes: 40,
  likes: 100,
  image: "images/leagueoflegends.jpg",
  owner: "admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",

  title: "League of Legends",
  reviews: [""],
  imageBackUp: "backupSrc",
};

export const mockGame2: Game = {
  category: "Adventure",
  id: "654546516510",
  company: "Bethesda",
  dislikes: 40,
  likes: 100,
  image: "images/thelastofus.webp",
  owner: "admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",

  title: "The Last of Us",
  reviews: [""],
  imageBackUp: "backupSrc",
};
export const mockGame3: Game = {
  category: "Shooter",
  id: "6549878978979",
  company: "Bethesda",
  dislikes: 40,
  likes: 100,
  image: "images/tarkov.jpg",
  owner: "admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",

  title: "Escape from Tarkov",
  reviews: [""],
  imageBackUp: "backupSrc",
};

export const mockGameArray: Game[] = [mockGame, mockGame2, mockGame3];

export const mockGameArraySix: Game[] = [
  mockGame,
  mockGame2,
  mockGame3,
  mockGame,
  mockGame2,
  mockGame3,
];
export const mockProtoGame: ProtoGame = {
  category: "MOBA",
  company: "Riot",
  dislikes: 40,
  likes: 100,
  image: "",
  owner: "admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",
  title: "League of Legends",
  reviews: [""],
};
