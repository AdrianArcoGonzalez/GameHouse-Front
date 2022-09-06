import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JoinUs from "./JoinUs";

describe("Given a JoinUs component", () => {
  describe("When it's instantiated", () => {
    test("And it should show title with the text given", () => {
      render(
        <BrowserRouter>
          <JoinUs />
        </BrowserRouter>
      );
      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });

    test("And it should show the text given", () => {
      const textExpected =
        "Become a soldier of the GameHouse Army. Make your own reviews and give and receive feedback from other soldiers!";

      render(
        <BrowserRouter>
          <JoinUs />
        </BrowserRouter>
      );
      const text = screen.getByText(textExpected);

      expect(text).toBeInTheDocument();
    });

    test("And it should show 2 buttons with the text given", () => {
      const button1 = "Sign Up";
      const button2 = "Sign In";
      render(
        <BrowserRouter>
          <JoinUs />
        </BrowserRouter>
      );
      const buttons = screen.getAllByRole("button");

      buttons.forEach((button) => expect(button).toBeInTheDocument());
      expect(buttons[0]).toHaveTextContent(button1);
      expect(buttons[1]).toHaveTextContent(button2);
    });
  });
});
