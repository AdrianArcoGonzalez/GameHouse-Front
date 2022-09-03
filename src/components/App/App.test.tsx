import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "../../utils/Wrapper";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );
      const heading = screen.getAllByRole("heading", {
        name: "GameHouse",
      });

      expect(heading[0]).toBeInTheDocument();
    });

    test("And it should show a text", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );
      const paragraph = screen.getByTestId("section");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
