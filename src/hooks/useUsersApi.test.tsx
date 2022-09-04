import { renderHook } from "@testing-library/react";
import { FormState } from "../components/Register/Register/Register";
import { store } from "../store/store";
import useUsersApi from "./useUsersApi";
import { Provider } from "react-redux";
import { toast } from "react-toastify";

jest.mock("react-toastify");

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
  beforeEach(() => jest.restoreAllMocks());
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

    const wrongUserData: FormState = {
      name: "",
      birthdate: "",
      email: "",
      image: "",
      location: "",
      password: "",
      repeatPassword: "",
      username: "",
    };
    const wrongUserString = JSON.stringify(wrongUserData);
    const wrongFormData = new FormData();
    wrongFormData.append("image", "i'm an image");
    wrongFormData.append("user", wrongUserString);
    test("Then it should return 200 as status on response and a message", async () => {
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
    describe("When it's invoked with the register method and a wrong data", () => {
      test("Then it should call the error modal", async () => {
        const {
          result: {
            current: { registerUser },
          },
        } = renderHook(useUsersApi, { wrapper: Wrapper });

        await registerUser(wrongFormData);

        expect(toast.error).toHaveBeenCalled();
      });
    });
  });

  describe("When it's invoked with a correct userLogin data", () => {
    test("Then it should call the dispatch the method set of local storage", async () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
      Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
      const userLogin = { username: "admin", password: "admin" };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUsersApi, { wrapper: Wrapper });
      await loginUser(userLogin);

      expect(toast.success).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalled();
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with a wrong data", () => {
    test("Then it should call de error toast", async () => {
      const userLoginWrong = { username: "admin", password: "" };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUsersApi, { wrapper: Wrapper });
      await loginUser(userLoginWrong);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});
