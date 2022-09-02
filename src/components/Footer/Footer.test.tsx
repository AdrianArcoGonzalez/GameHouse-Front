import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );
      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });

    test("And it should show the the copyright text", () => {
      const copyrightText = "© 2022 GameHouse Inc. Adrian Arco Gonzalez";

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );
      const copyright = screen.getByText(copyrightText);

      expect(copyright).toBeInTheDocument();
    });
  });
});
