import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockGame } from "../mocks/mockGame";
import { store } from "../store/store";
import { Wrapper } from "../utils/Wrapper";
import MyCollectionPage from "./MyCollectionPage";

const mockSelector = [mockGame];

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppSelector: () => mockSelector,
}));

const mockUseGames = {
  getByOwner: jest.fn(),
};

jest.mock("../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a mycollection page", () => {
  describe("When it's instantiated", () => {
    test("Then it should call the useAppSelector", () => {
      render(
        <Wrapper>
          <MyCollectionPage />
        </Wrapper>
      );

      expect(mockUseGames.getByOwner).toHaveBeenCalled();
    });

    test("And it should show a card", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyCollectionPage />
          </Provider>
        </BrowserRouter>
      );
      const listItem = screen.getByRole("listitem");

      expect(listItem).toBeInTheDocument();
    });
  });
});
