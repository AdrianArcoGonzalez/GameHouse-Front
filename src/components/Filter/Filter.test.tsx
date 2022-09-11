import { render, screen } from "@testing-library/react";
import Filter from "./Filter";
import UserEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const mockUseGames = {
  getAllGames: jest.fn(),
  getByCategory: jest.fn(),
};
jest.mock("../../hooks/useGamesApi", () => () => mockUseGames);

beforeEach(() => jest.clearAllMocks());

describe("Given a filter component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show an input select", () => {
      const label = "Category";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const select = screen.getByLabelText(label);

      expect(select).toBeInTheDocument();
    });

    test("And it should show 8 options to choose", () => {
      const expectedLenght = 8;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const options = screen.getAllByRole("option");

      expect(options).toHaveLength(expectedLenght);
    });

    test("And when the user choose an option it should call de useState", async () => {
      const mockUseState = jest.spyOn(React, "useState");

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      await UserEvent.click(button);
      const input = screen.getByLabelText("Category");

      expect(input).toHaveValue("All");
      expect(mockUseGames.getAllGames).toHaveBeenCalled();
      expect(mockUseState).toHaveBeenCalledTimes(2);
    });

    test("And when the user choose the All option getByCategory method", async () => {
      jest.restoreAllMocks();

      const option = "Adventure";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      const input = screen.getByLabelText("Category");
      await UserEvent.selectOptions(input, option);
      await UserEvent.click(button);

      expect(mockUseGames.getByCategory).toHaveBeenCalled();
      expect(input).toHaveValue(option);
    });
  });
});
