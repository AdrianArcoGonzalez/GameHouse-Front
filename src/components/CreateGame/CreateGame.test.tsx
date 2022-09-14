import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import React from "react";
import { Wrapper } from "../../utils/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import CreateGame from "./CreateGame";

beforeEach(() => jest.restoreAllMocks());

const mockUseGames = {
  createGame: jest.fn(),
};
jest.mock("../../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a CreateGame component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a form", () => {
      const expectedLength = 3;
      render(<CreateGame />, { wrapper: Wrapper });

      const inputsText = screen.getAllByRole("textbox");

      expect(inputsText).toHaveLength(expectedLength);
    });

    test("And it should show a text area input", () => {
      render(<CreateGame />, { wrapper: Wrapper });

      const textArea = screen.getByRole("combobox");

      expect(textArea).toBeInTheDocument();
    });
    test("And it should show an options input with 8 options", () => {
      const expectedLenght = 7;
      render(<CreateGame />, { wrapper: Wrapper });

      const inputOptions = screen.getAllByRole("option");

      expect(inputOptions).toHaveLength(expectedLenght);
    });

    test("And when the user write it should call the usestate", async () => {
      const text = "MyGame";
      render(<CreateGame />, { wrapper: Wrapper });

      const textInput = screen.getAllByRole("textbox");
      await UserEvent.type(textInput[0], text);

      await waitFor(() => expect(textInput[0]).toHaveValue(text));
    });

    test("And when the user write on textarea it should call the usestate", async () => {
      jest.clearAllMocks();
      const expectedValue = "Adventure";
      render(<CreateGame />, { wrapper: Wrapper });

      const selectInput = screen.getByLabelText("Category");
      UserEvent.selectOptions(selectInput, expectedValue);

      await waitFor(() => {
        expect(selectInput).toHaveValue(expectedValue);
      });
    });

    test("And when the user upload a file it should call the usestate", async () => {
      const useState = jest.spyOn(React, "useState");
      const labelText = "Image";
      const file = new File([""], "");
      render(<CreateGame />, { wrapper: Wrapper });

      const fileInput = screen.getByLabelText(labelText);
      await UserEvent.upload(fileInput, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user submit the form", async () => {
      const useState = jest.spyOn(React, "useState");

      render(<CreateGame />, { wrapper: Wrapper });

      const buttonSubmit = screen.getByRole("button");
      fireEvent.submit(buttonSubmit);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user write on the textArea it should call useState", async () => {
      const text = "This is a game";
      const labelTextArea = "Sinopsis";
      render(<CreateGame />, { wrapper: Wrapper });

      const textArea = screen.getByLabelText(labelTextArea);
      UserEvent.type(textArea, text);

      await waitFor(() => expect(textArea).toHaveValue(text));
    });

    test("And the button must be disabled if there is an input empty", async () => {
      const mockUseState = jest.spyOn(React, "useState");
      const mockState = {
        category: "",
        company: "",
        dislikes: 0,
        image: "",
        owner: "",
        sinopsis: "",
        likes: 0,
        title: "",
        reviews: [],
      };
      const mockUseGame = jest.fn();
      mockUseState.mockImplementation(() => [mockState, mockUseGame]);
      render(
        <Provider store={store}>
          <CreateGame />
        </Provider>
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });

    test("And if the user write on the title input it must change the value", async () => {
      const labelTitle = "Title";
      const text = "Assassins creed";
      render(
        <Provider store={store}>
          <CreateGame />
        </Provider>
      );

      const titleInput = screen.getByLabelText(labelTitle);

      await UserEvent.type(titleInput, text);

      expect(titleInput).toHaveValue(text);
    });
  });
});
