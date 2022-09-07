import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../utils/Wrapper";
import Games from "./Games";

describe("Given a Games component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of games", () => {
      render(<Games />, { wrapper: Wrapper });
      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    test("And it should render the list items", () => {
      render(<Games />, { wrapper: Wrapper });
      const listItem = screen.getAllByRole("listitem");

      listItem.forEach((item) => expect(item).toBeInTheDocument());
    });
  });
});
