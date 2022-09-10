import DetailsPage from "./DetailsPage";
import { mockGame } from "../mocks/mockGame";
import TestRenderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { Wrapper } from "../utils/Wrapper";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = jest.fn().mockReturnValue(mockGame.id);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockGame.id }),
  useNavigate: () => mockNavigate,
}));

const mockUseGames = {
  getOneGameById: jest.fn().mockResolvedValue(mockGame),
};
jest.mock("../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a DetailsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the screenshoot", async () => {
      const detailsSnapshot = TestRenderer.create(
        <Wrapper>
          <DetailsPage />
        </Wrapper>
      );

      expect(detailsSnapshot).toMatchSnapshot();
    });

    test("And it should call the useState function", () => {
      const mockUseState = jest.spyOn(React, "useState");
      render(
        <Wrapper>
          <DetailsPage />
        </Wrapper>
      );

      expect(mockUseState).toHaveBeenCalled();
    });

    test("And it should call the method window scroll", async () => {
      jest.restoreAllMocks();
      window.scrollTo = jest.fn();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailsPage />
          </Provider>
        </BrowserRouter>
      );

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
