import DetailsPage from "./DetailsPage";
import { mockGame } from "../mocks/mockGame";
import TestRenderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { Wrapper } from "../utils/Wrapper";
import React from "react";

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
  });
});
