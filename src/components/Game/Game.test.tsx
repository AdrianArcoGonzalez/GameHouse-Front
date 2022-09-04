import { render, screen } from "@testing-library/react";
import { mockGame } from "../../mocks/mockGame";
import Game from "./Game";

describe("Given a Game component", () => {
  describe("When it's instantiated with a game as props", () => {
    test("Then it should render the image with the src given", () => {
      const expectedSrc = `http://localhost/${mockGame.image}`;
      render(<Game game={mockGame} />);
      const image = screen.getByRole("img");

      expect((image as HTMLImageElement).src).toBe(expectedSrc);
    });

    test("And the image must have the title as alt text", () => {
      render(<Game game={mockGame} />);
      const image = screen.getByRole("img");

      expect((image as HTMLImageElement).alt).toBe(mockGame.title);
    });

    test("And it should show the title of the game on screen", () => {
      render(<Game game={mockGame} />);
      const title = screen.getByText(mockGame.title);

      expect(title).toBeInTheDocument();
    });

    test("And it should show the category of the game on screen", () => {
      render(<Game game={mockGame} />);
      const category = screen.getByText(mockGame.category);

      expect(category).toBeInTheDocument();
    });
  });
});
