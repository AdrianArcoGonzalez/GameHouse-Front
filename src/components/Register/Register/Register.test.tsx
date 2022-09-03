import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../../utils/Wrapper";
import Register from "./Register";

describe("Given a Register component", () => {
  describe("When it's instantiated", () => {
    test("Then it should a form", () => {
      render(<Register />, { wrapper: Wrapper });
      const form = screen.getByTestId("formRegister");

      expect(form).toBeInTheDocument();
    });

    test("And it should show the registerCard", () => {
      render(<Register />, { wrapper: Wrapper });
      const cardRegister = screen.getByTestId("cardRegister");

      expect(cardRegister).toBeInTheDocument();
    });
  });
});
