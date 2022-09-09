export interface LoginUser {
  username: string;
  password: string;
}

export interface User {
  username: string;
  id: string;
  token: string;
  isLogged: boolean;
}

export interface Game {
  id: string;
  title: string;
  category: string;
  company: string;
  image: string;
  sinopsis: string;
  owner: string;
  likes: number;
  dislikes: number;
  reviews?: string[];
  imageBackUp?: string;
}
