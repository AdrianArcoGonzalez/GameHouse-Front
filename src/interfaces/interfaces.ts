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
