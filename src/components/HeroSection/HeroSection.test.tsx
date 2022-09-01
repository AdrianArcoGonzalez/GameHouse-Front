import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("Given a HeroSection component", () => {
  describe("When it instantiated", () => {
    test("Then it should show a section element", () => {
      render(<HeroSection />);
      const section = screen.getByTestId("section");

      expect(section).toBeInTheDocument();
    });

    test("And it should show a especific text", () => {
      const text =
        "Become a soldier of the GameHouse Army. Make your own reviews and receive feedback from other soldiers.";

      render(<HeroSection />);
      const paragraph = screen.getByText(text);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
