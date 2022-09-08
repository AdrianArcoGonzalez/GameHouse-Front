import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockGame } from "../../mocks/mockGame";
import { Wrapper } from "../../utils/Wrapper";
import Game from "./Game";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

const mockUseGames = {
  deleteGameById: jest.fn(),
};

jest.mock("../../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a Game component", () => {
  describe("When it's instantiated with a game as props", () => {
    test("Then it should render the image with the src given", () => {
      const expectedSrc = `http://localhost/${mockGame.image}`;
      render(
        <Wrapper>
          <Game game={mockGame} />
        </Wrapper>
      );
      const image = screen.getByRole("img");

      expect((image as HTMLImageElement).src).toBe(expectedSrc);
    });

    test("And the image must have the title as alt text", () => {
      render(
        <Wrapper>
          <Game game={mockGame} />
        </Wrapper>
      );
      const image = screen.getByRole("img");

      expect((image as HTMLImageElement).alt).toBe(mockGame.title);
    });

    test("And it should show the title of the game on screen", () => {
      render(
        <Wrapper>
          <Game game={mockGame} />
        </Wrapper>
      );
      const title = screen.getByText(mockGame.title);

      expect(title).toBeInTheDocument();
    });

    test("And it should show the category of the game on screen", () => {
      render(
        <Wrapper>
          <Game game={mockGame} />
        </Wrapper>
      );
      const category = screen.getByText(mockGame.category);

      expect(category).toBeInTheDocument();
    });

    test("And if the user click on the image it should call the handleNavigate", async () => {
      render(
        <Wrapper>
          <Game game={mockGame} />
        </Wrapper>
      );
      const image = screen.getByRole("img");
      await userEvent.click(image);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
