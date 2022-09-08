import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockGame } from "../../mocks/mockGame";
import mockStore from "../../mocks/mockStore";
import { Wrapper } from "../../utils/Wrapper";
import GameDetails from "./GameDetails";

const mockUseGames = {
  deleteGameById: jest.fn(),
};

jest.mock("../../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a GameDetails component", () => {
  describe("When it's instantiated with a game as props", () => {
    test("Then it should render an image", () => {
      render(
        <Wrapper>
          <GameDetails game={mockGame} />
        </Wrapper>
      );
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });

    test("And it shouls show a title with the game title", () => {
      const titleText = `${mockGame.title}`;
      render(
        <Wrapper>
          <GameDetails game={mockGame} />
        </Wrapper>
      );
      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });

    test("And it should show 4 blocs of text with the game information", () => {
      const infoBlocks = [
        mockGame.category,
        mockGame.company,
        mockGame.owner,
        mockGame.sinopsis,
      ];
      const blocks: HTMLElement[] = [];
      render(
        <Wrapper>
          <GameDetails game={mockGame} />
        </Wrapper>
      );

      infoBlocks.forEach((infoBlock) => {
        blocks.push(screen.getByText(infoBlock));
      });

      blocks.forEach((block) => expect(block).toBeInTheDocument());
    });
    test("And if u are logged in and u are the owner of the game it should show a button to delete", async () => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <GameDetails game={mockGame} />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);

      await waitFor(() =>
        expect(mockUseGames.deleteGameById).toHaveBeenCalled()
      );
    });
  });
});
