import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const heading = screen.getByRole("heading", {
        name: "GameHouse",
      });

      expect(heading).toBeInTheDocument();
    });

    test("And it should show a text", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const paragraph = screen.getByTestId("section");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
