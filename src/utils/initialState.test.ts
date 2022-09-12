import { User } from "../interfaces/interfaces";
import initialState from "./initialState";

const tokenUser = {
  username: "adrian",
  id: "123432432423",
  isLogged: true,
};

jest.mock("./auth", () => () => tokenUser);

describe("Given a initialState function", () => {
  describe("When it's invoked", () => {
    test("Then if there isn't token in local storage it should return an empty value", async () => {
      const emptyUser: User = {
        username: "",
        id: "",
        isLogged: false,
        token: "",
      };
      const user = initialState();

      expect(user).toStrictEqual(emptyUser);
    });
    test("Then if there is token in local storage it should return the value that decodetoken function return", async () => {
      const mockTokenStorage =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGQzNWI4NGQzMmExOGViOTZhMjljYyIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjI0OTU3Njh9.29edGTKKsTXErsUrlP9rSPoAHa9BGvoHa1JvcMNnmdc";
      window.localStorage.setItem("token", mockTokenStorage);

      const user = initialState();

      expect(user).toBe(tokenUser);
    });
  });
});
