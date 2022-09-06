import { render, screen } from "@testing-library/react";
import { mockGame } from "../../mocks/mockGame";
import GameDetails from "./GameDetails";

describe("Given a GameDetails component", () => {
  describe("When it's instantiated with a game as props", () => {
    test("Then it should render an image", () => {
      render(<GameDetails game={mockGame} />);
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });

    test("And it shouls show a title with the game title", () => {
      const titleText = `${mockGame.title}`;
      render(<GameDetails game={mockGame} />);
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
      render(<GameDetails game={mockGame} />);

      infoBlocks.forEach((infoBlock) => {
        blocks.push(screen.getByText(infoBlock));
      });

      blocks.forEach((block) => expect(block).toBeInTheDocument());
    });
  });
});
