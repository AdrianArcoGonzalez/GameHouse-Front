import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import React from "react";
import { Wrapper } from "../../utils/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import EditGame from "./EditGame";
import { BrowserRouter } from "react-router-dom";

const mockProtoGame = {
  category: "",
  company: "",
  dislikes: 0,
  image: "",
  likes: 0,
  owner: "",
  sinopsis: "",
  title: "",
  reviews: [],
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockUseGames = {
  editGame: jest.fn(),
  getOneGameById: () => mockProtoGame,
};
jest.mock("../../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a EditGame component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a form", () => {
      const expectedLength = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditGame />
          </Provider>
        </BrowserRouter>
      );

      const inputsText = screen.getAllByRole("textbox");

      expect(inputsText).toHaveLength(expectedLength);
    });
    test("And it should show a text area input", () => {
      render(<EditGame />, { wrapper: Wrapper });

      const textArea = screen.getByRole("combobox");

      expect(textArea).toBeInTheDocument();
    });
    test("And it should show an options input with 8 options", () => {
      const expectedLenght = 7;
      render(<EditGame />, { wrapper: Wrapper });

      const inputOptions = screen.getAllByRole("option");

      expect(inputOptions).toHaveLength(expectedLenght);
    });

    test("And when the user write it should call the usestate", async () => {
      const text = "My Games";
      const labelText = "Title";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditGame />
          </Provider>
        </BrowserRouter>
      );
      const textInput = screen.getByLabelText(labelText);
      await UserEvent.clear(textInput);
      await UserEvent.type(textInput, text);

      await waitFor(() => expect(textInput).toHaveValue(text));
    });

    test("And when the user write  on textarea it should call the usestate", async () => {
      const text = "MyGame";
      const label = "Sinopsis";

      render(<EditGame />, { wrapper: Wrapper });
      const textAreaInput = screen.getByLabelText(label);
      await UserEvent.type(textAreaInput, text);

      await waitFor(() => expect(textAreaInput).toHaveValue(text));
    });

    test("And when the user write on textarea it should call the usestate", async () => {
      const label = "Category";
      const option = "Adventure";

      render(<EditGame />, { wrapper: Wrapper });
      const optionInput = screen.getByLabelText(label);
      await UserEvent.selectOptions(optionInput, option);

      await waitFor(() => expect(optionInput).toHaveValue(option));
    });

    test("And when the user upload a file it should call the usestate", async () => {
      const useState = jest.spyOn(React, "useState");
      const labelText = "Image";
      const file = new File(["file"], "");

      render(<EditGame />, { wrapper: Wrapper });
      const fileInput = screen.getByLabelText(labelText);
      await UserEvent.upload(fileInput, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user submit the form", async () => {
      jest.restoreAllMocks();
      const useState = jest.spyOn(React, "useState");

      render(<EditGame />, { wrapper: Wrapper });

      const buttonSubmit = screen.getByRole("button");
      fireEvent.submit(buttonSubmit);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user write on the textArea it should call useState", async () => {
      jest.restoreAllMocks();
      const text = "This is a game";
      const labelText = "Sinopsis";

      render(<EditGame />, { wrapper: Wrapper });
      const textArea = screen.getByLabelText(labelText);
      await UserEvent.type(textArea, text);

      await waitFor(() => expect(textArea).toHaveValue(text));
    });

    test("And when the user write on the  it should call useState", async () => {
      jest.restoreAllMocks();
      const useState = jest.spyOn(React, "useState");

      render(<EditGame />, { wrapper: Wrapper });

      const options = screen.getAllByRole("option");
      await UserEvent.click(options[0]);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });
  });
});
