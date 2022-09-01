import { renderHook } from "@testing-library/react";
import { FormState } from "../Register/Register/Register";
import useUsersApi from "./useUsersApi";

const fakeUser: FormState = {
  name: "adrian",
  birthdate: "10/10/1010",
  email: "adrian@gmail.com",
  image: "",
  location: "Barcelona",
  password: "123456",
  repeatPassword: "123456",
  username: "adrian123",
};
const userString = JSON.stringify(fakeUser);

const formdataTest = new FormData();

formdataTest.append("image", "i'm an image");
formdataTest.append("user", userString);

describe("Given a useUserApi custom hook", () => {
  describe("When it's invoked with his method registerUser and a formdata item with the correct data", () => {
    test("Then it should return 200 as status on response", async () => {
      const statusExpected = 200;
      const messageExpected = {
        message: "User created",
      };
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUsersApi);

      const returnRegister = await registerUser(formdataTest);

      await expect(returnRegister?.status).toStrictEqual(statusExpected);
      await expect(returnRegister?.data).toStrictEqual(messageExpected);
    });
  });
});
