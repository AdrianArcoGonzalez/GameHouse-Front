import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockGameArray } from "../../mocks/mockGame";
import { store } from "../../store/store";
import Games from "./Games";

const mockAppSelector = mockGameArray;
jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockAppSelector,
}));
describe("Given a Games component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of games", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Games />
          </Provider>
        </BrowserRouter>
      );
      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    test("And it should render the list items", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Games />
          </Provider>
        </BrowserRouter>
      );
      const listItem = screen.getAllByRole("listitem");

      listItem.forEach((item) => expect(item).toBeInTheDocument());
    });
  });
});
