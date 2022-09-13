import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../utils/Wrapper";
import App from "./App";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given an App component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show", () => {
      render(<App />, { wrapper: Wrapper });
      const heading = screen.getAllByRole("heading", {
        name: "GameHouse",
      });

      expect(heading[0]).toBeInTheDocument();
    });

    test("And it should show a text", () => {
      render(<App />, { wrapper: Wrapper });
      const paragraph = screen.getByTestId("section");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
