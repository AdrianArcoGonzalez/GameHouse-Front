import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "../../utils/Wrapper";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      render(
        <Wrapper>
          <Footer />
        </Wrapper>
      );
      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });

    test("And it should show the the copyright text", () => {
      const copyrightText = "© 2022 GameHouse Inc. Adrian Arco Gonzalez";

      render(
        <Wrapper>
          <Footer />
        </Wrapper>
      );

      const copyright = screen.getByText(copyrightText);

      expect(copyright).toBeInTheDocument();
    });
  });
});
