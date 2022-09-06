import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Wrapper } from "../../utils/Wrapper";
import Login from "./Login";

describe("Given a Login component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      render(
        <Login />,

        { wrapper: Wrapper }
      );
      const header = screen.getByRole("heading");

      expect(header).toBeInTheDocument();
    });

    test("And it should show the username input", () => {
      const labeUser = "Username";

      render(<Login />, { wrapper: Wrapper });
      const usernameInput = screen.getByLabelText(labeUser);

      expect(usernameInput).toBeInTheDocument();
    });

    test("And it should show the password input", () => {
      const labelPassword = "Password";

      render(<Login />, { wrapper: Wrapper });
      const passwordInput = screen.getByLabelText(labelPassword);

      expect(passwordInput).toBeInTheDocument();
    });

    test("And it should show a button with text Sign In", () => {
      const textButton = "Sign In";

      render(<Login />, { wrapper: Wrapper });
      const buttonLogin = screen.getByRole("button");

      expect((buttonLogin as HTMLButtonElement).textContent).toBe(textButton);
    });

    test("And then it should show a text to send you to sign up", () => {
      const text = "Haven't an account yet? Go to";

      render(<Login />, { wrapper: Wrapper });
      const textOnScreen = screen.getByText(text);

      expect(textOnScreen).toBeInTheDocument();
    });

    test("And if the user write on the username input then it should change the value", async () => {
      const labelUsername = "Username";
      const userWrite = "adrian123";

      render(<Login />, { wrapper: Wrapper });
      const usernameInput = screen.getByLabelText(labelUsername);
      await userEvent.type(usernameInput, userWrite);
      expect(usernameInput).toHaveValue(userWrite);
    });
  });
  describe("And when it's all data completed on form", () => {
    test("And it should call the useState method on submit", async () => {
      const mockUseState = jest.spyOn(React, "useState");
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const type1 = "adrian";
      const type2 = "123456";

      render(<Login />, { wrapper: Wrapper });

      const inputUsername = screen.getByLabelText(usernameLabel);
      const inputPassword = screen.getByLabelText(passwordLabel);
      const button = screen.getByRole("button");
      await userEvent.type(inputUsername, type1);
      await userEvent.type(inputPassword, type2);
      await userEvent.click(button);

      expect(mockUseState).toHaveBeenCalled();
    });
  });
});
