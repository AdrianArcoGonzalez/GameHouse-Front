import jwt from "jwt-decode";

const decodeToken = (token: string) => {
  const payloadToken: {
    id: string;
    username: string;
    iat: number;
  } = jwt(token);

  const user = {
    token: token,
    id: payloadToken.id,
    username: payloadToken.username,
  };
  return user;
};

export default decodeToken;
