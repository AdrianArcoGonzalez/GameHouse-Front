import { renderHook } from "@testing-library/react";
import { FormState } from "../components/Register/Register/Register";
import { store } from "../store/store";
import useUsersApi from "./useUsersApi";
import { Provider } from "react-redux";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a useUserApi custom hook", () => {
  describe("When it's invoked with his method registerUser and a formdata item with the correct data", () => {
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

    test("Then it should return 200 as status on response", async () => {
      const statusExpected = 200;
      const messageExpected = {
        message: "User created",
      };
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUsersApi, { wrapper: Wrapper });

      const returnRegister = await registerUser(formdataTest);

      await expect(returnRegister?.status).toStrictEqual(statusExpected);
      await expect(returnRegister?.data).toStrictEqual(messageExpected);
    });
  });

  describe("When it's invoked with a correct userLogin data", () => {
    test("Then it should call the dispatch the method set of local storage", async () => {
      const mockToken = {
        username: "admin",
        id: "imTheId",
        token: "imTheToken",
      };
      jest.mock("../utils/auth", () => () => mockToken);
      jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
      Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

      const userLogin = { username: "admin", password: "admin" };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUsersApi, { wrapper: Wrapper });
      await loginUser(userLogin);

      expect(mockDispatch).toHaveBeenCalled();
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });
});
