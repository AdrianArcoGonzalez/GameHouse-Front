import decodeToken from "./auth";

const emptyUser = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};
const initialState = () => {
  const token = localStorage.getItem("token") as string;

  if (token) {
    return decodeToken(token);
  }

  return emptyUser;
};

export default initialState;
