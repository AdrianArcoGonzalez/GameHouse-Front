import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading with GameHouse text", () => {
      const text = "GameHouse";
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const heading = screen.getAllByRole("heading", {
        name: text,
      });

      expect(heading[0]).toBeInTheDocument();
    });

    test("And it should show a burguer menu", () => {
      const id = "burguer";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const burguerMenu = screen.getByTestId(id);

      expect(burguerMenu).toBeInTheDocument();
    });

    test("And it should show a list of links", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const navigation = screen.getByRole("navigation");

      expect(navigation).toBeInTheDocument();
    });
    test("And if the user click on the menu then it should call the setState", async () => {
      const usestate = jest.spyOn(React, "useState");
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const burguer = screen.getByRole("button");
      await userEvent.click(burguer);

      await waitFor(() => {
        expect(usestate).toHaveBeenCalled();
      });
    });
  });
});
