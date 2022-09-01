import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

const mockState = true;
const mockSetstate = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockState, mockSetstate],
}));

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading with GameHouse text", () => {
      const text = "GameHouse";
      render(<Header />);
      const heading = screen.getByRole("heading", {
        name: text,
      });

      expect(heading).toBeInTheDocument();
    });

    test("And it should show a burguer menu", () => {
      const id = "burguer";

      render(<Header />);
      const burguerMenu = screen.getByTestId(id);

      expect(burguerMenu).toBeInTheDocument();
    });

    test("And if the user click on the menu then it should call the setState", async () => {
      const id = "burguer";

      render(<Header />);
      const burguerMenu = screen.getByTestId(id);
      fireEvent.click(burguerMenu);

      expect(mockSetstate).toHaveBeenCalled();
    });

    test("And it should show a list of links", () => {
      const expectedLenght = 5;
      render(<Header />);
      const links = screen.getAllByRole("listitem", { hidden: false });

      links.forEach((link) => {
        expect(link).toBeInTheDocument();
      });
      expect(links.length).toBe(expectedLenght);
    });
  });
});
