export interface LoginUser {
  username: string;
  password: string;
}

export interface User {
  username: string;
  token: string;
  isLogged: boolean;
  id: string;
}
