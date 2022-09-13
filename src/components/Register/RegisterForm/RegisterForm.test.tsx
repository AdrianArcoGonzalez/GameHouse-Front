import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import React from "react";
import { Wrapper } from "../../../utils/Wrapper";
import RegisterForm from "./RegisterForm";

const mockState = {
  name: "Peter",
  birthdate: "10/12/1995",
  email: "peter@gmail.es",
  location: "New York",
  image: "image.jpg",
  username: "peter123",
  password: "123456",
  repeatPassword: "123456",
};
const mockSetstate = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockState, mockSetstate],
}));

describe("Given a registerForm component", () => {
  describe("When it's instantiated with a user and a setUser function", () => {
    test("Then it should show all the fields", () => {
      const inputs = [
        "Name",
        "Email",
        "Birthdate",
        "Location",
        "Image",
        "Username",
        "Password",
        "Repeat Password",
      ];

      render(<RegisterForm setUser={mockSetstate} userRegister={mockState} />, {
        wrapper: Wrapper,
      });
      const fieldName = screen.getByLabelText(inputs[0]);
      const fieldEmail = screen.getByLabelText(inputs[1]);
      const fieldBirthday = screen.getByLabelText(inputs[2]);
      const fieldLocation = screen.getByLabelText(inputs[3]);
      const fieldImage = screen.getByLabelText(inputs[4]);
      const fieldUsername = screen.getByLabelText(inputs[5]);
      const fieldPassword = screen.getByLabelText(inputs[6]);
      const fieldRepeatPassword = screen.getByLabelText(inputs[7]);

      expect(fieldName).toBeInTheDocument();
      expect(fieldEmail).toBeInTheDocument();
      expect(fieldBirthday).toBeInTheDocument();
      expect(fieldLocation).toBeInTheDocument();
      expect(fieldImage).toBeInTheDocument();
      expect(fieldUsername).toBeInTheDocument();
      expect(fieldPassword).toBeInTheDocument();
      expect(fieldRepeatPassword).toBeInTheDocument();
    });

    test("And when the user place an image on the input it should take the value of the name", async () => {
      jest.clearAllMocks();
      const file = new File(["(⌐□_□)"], "chucknorris.png", {
        type: "image/png",
      });
      render(<RegisterForm setUser={mockSetstate} userRegister={mockState} />, {
        wrapper: Wrapper,
      });
      const inputFile = screen.getByTestId("inputFile");
      await UserEvent.upload(inputFile, file);

      await waitFor(() => {
        expect(mockSetstate).toHaveBeenCalled();
      });
    });

    test("And it should have a button with text content submit", () => {
      const buttonText = "Register";

      render(<RegisterForm setUser={mockSetstate} userRegister={mockState} />, {
        wrapper: Wrapper,
      });
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent(buttonText);
    });
  });

  describe("When it's instantiated with empty fields", () => {
    test("Then the button should be dissabled", () => {
      const mockAlmostEmptyState = {
        name: "a",
        birthdate: "a",
        email: "a",
        location: "a",
        image: "",
        username: "a",
        password: "a",
        repeatPassword: "",
      };
      render(
        <RegisterForm
          setUser={mockSetstate}
          userRegister={mockAlmostEmptyState}
        />,
        { wrapper: Wrapper }
      );
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });

    test("And when it's submited then it should call the submit method from the form", async () => {
      const mockuseUserApi = jest.fn();

      jest.mock("../../../hooks/useUsersApi", () => ({
        ...jest.requireActual("../../../hooks/useUsersApi"),
        useUsersApi: () => mockuseUserApi,
      }));

      const mockedFile = new File([""], "");
      const fileInputText = "Image";
      const mockFullState = {
        name: "Peter",
        birthdate: "10/12/1995",
        email: "peter@gmail.es",
        location: "New York",
        image: "",
        username: "peter123",
        password: "123456",
        repeatPassword: "123456",
      };
      const mockSubmit = jest.fn();

      render(
        <RegisterForm setUser={mockSetstate} userRegister={mockFullState} />,
        { wrapper: Wrapper }
      );

      const form = screen.getByTestId("formRegister");
      form.onsubmit = mockSubmit;
      const fileInput = screen.getByLabelText(fileInputText);
      const button = screen.getByRole("button", {
        name: "Register",
      });

      await UserEvent.upload(fileInput, mockedFile);
      fireEvent.submit(button);

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalled();
      });
    });
    test("And it should call the method setState", async () => {
      const mockedFile = new File([""], "");
      const fileInputText = "Image";
      const mockFullState = {
        name: "Peter",
        birthdate: "10/12/1995",
        email: "peter@gmail.es",
        location: "New York",
        image: "",
        username: "peter123",
        password: "123456",
        repeatPassword: "123456",
      };

      render(
        <RegisterForm setUser={mockSetstate} userRegister={mockFullState} />,
        { wrapper: Wrapper }
      );

      const fileInput = screen.getByLabelText(fileInputText);
      const button = screen.getByRole("button", {
        name: "Register",
      });

      await UserEvent.upload(fileInput, mockedFile);
      fireEvent.submit(button);

      await waitFor(() => {
        expect(mockSetstate).toHaveBeenCalled();
      });
    });
  });

  describe("When the user write on an input", () => {
    test("Then it should call the setState function", async () => {
      const mockEmptyState = {
        name: "",
        birthdate: "",
        email: "",
        location: "",
        image: "",
        username: "",
        password: "",
        repeatPassword: "",
      };
      const userWrite = "hi";
      const name = "Name";

      render(
        <RegisterForm setUser={mockSetstate} userRegister={mockEmptyState} />,
        { wrapper: Wrapper }
      );
      const input = screen.getByLabelText(name);
      UserEvent.type(input, userWrite);

      await waitFor(() => {
        expect(mockSetstate).toHaveBeenCalled();
      });
    });
  });
});
