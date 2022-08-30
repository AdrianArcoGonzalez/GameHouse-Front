import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Given a Register component", () => {
  describe("When it's instantiated", () => {
    test("Then it should a form", () => {
      render(<Register />);
      const form = screen.getByTestId("formRegister");

      expect(form).toBeInTheDocument();
    });

    test("And it should show the registerCard", () => {
      render(<Register />);
      const cardRegister = screen.getByTestId("cardRegister");

      expect(cardRegister).toBeInTheDocument();
    });
  });
});
