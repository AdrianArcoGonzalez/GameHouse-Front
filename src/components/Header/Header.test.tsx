import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "../../utils/Wrapper";
import Header from "./Header";
import * as reactRedux from "react-redux";
import mockStore from "../../mocks/mockStore";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const WrapperFakeStore = ({ children }: WrapperProps): JSX.Element => {
  return (
    <reactRedux.Provider store={mockStore}>{children}</reactRedux.Provider>
  );
};

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
    test("Then it should show a heading with GameHouse text", () => {
      const text = "GameHouse";
      render(<Header />, { wrapper: Wrapper });
      const heading = screen.getAllByRole("heading", {
        name: text,
      });

      expect(heading[0]).toBeInTheDocument();
    });

    test("And it should show a burguer menu", () => {
      const id = "burguer";

      render(<Header />, { wrapper: Wrapper });
      const burguerMenu = screen.getByTestId(id);

      expect(burguerMenu).toBeInTheDocument();
    });

    test("And it should show a list of links", () => {
      render(<Header />, { wrapper: Wrapper });
      const navigation = screen.getByRole("navigation");

      expect(navigation).toBeInTheDocument();
    });
    test("And if the user click on the menu then it should call the setState", async () => {
      const usestate = jest.spyOn(React, "useState");
      render(<Header />, { wrapper: Wrapper });
      const burguer = screen.getByRole("button");
      await userEvent.click(burguer);

      await waitFor(() => {
        expect(usestate).toHaveBeenCalled();
      });
    });

    test("And it should show a logout button if it's logged in", async () => {
      const textButton = "Logout";

      render(<Header />, { wrapper: WrapperFakeStore });
      const logoutButton = screen.getByText(textButton);
      await userEvent.click(logoutButton);

      expect(mockDispatch).toHaveBeenCalled();
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
