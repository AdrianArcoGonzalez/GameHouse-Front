import { Game } from "../interfaces/interfaces";

export const mockGame: Game = {
  category: "MOBA",
  company: "Riot",
  dislikes: 40,
  likes: 100,
  image: "images/leagueoflegends.jpg",
  owner: "Admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",

  title: "League of Legends",
  reviews: [""],
};

export const mockGame2: Game = {
  category: "Adventure",
  company: "Bethesda",
  dislikes: 40,
  likes: 100,
  image: "images/thelastofus.webp",
  owner: "Admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",

  title: "The Last of Us",
  reviews: [""],
};
export const mockGame3: Game = {
  category: "Shooter",
  company: "Bethesda",
  dislikes: 40,
  likes: 100,
  image: "images/tarkov.jpg",
  owner: "Admin",
  sinopsis:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio ut odit, illo sit eligendi nobis explicabo eos, aliquid qui inventore provident minus impedit consequuntur asperiores iure recusandae culpa quam?",

  title: "Escape from Tarkov",
  reviews: [""],
};

export const mockGameArray: Game[] = [
  mockGame,
  mockGame2,
  mockGame3,
  mockGame,
  mockGame2,
  mockGame3,
];
