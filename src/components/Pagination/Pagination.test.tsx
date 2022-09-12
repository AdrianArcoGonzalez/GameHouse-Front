import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Pagination from "./Pagination";
import UserEvent from "@testing-library/user-event";
import { mockGameArray, mockGameArraySix } from "../../mocks/mockGame";
import { toast } from "react-toastify";
import { Game } from "../../interfaces/interfaces";
jest.mock("react-toastify");

let mockSelector: Game[];

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockSelector,
}));

describe("Given a pagination component", () => {
  describe("When it's instantiated", () => {
    const state = 1;
    const useState = jest.fn();
    test("Then it should show 2 buttons", () => {
      render(
        <Provider store={store}>
          <Pagination page={state} setPage={useState} />
        </Provider>
      );
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(2);
    });

    test("And it should show the number of the page", () => {
      const text = `Page ${state}`;

      render(
        <Provider store={store}>
          <Pagination page={state} setPage={useState} />
        </Provider>
      );
      const pageInfo = screen.getByText(text);

      expect(pageInfo).toBeInTheDocument();
    });

    test("And if the user click on button next and the page is full it should call the setstate function", async () => {
      mockSelector = mockGameArraySix;

      render(
        <Provider store={store}>
          <Pagination page={state} setPage={useState} />
        </Provider>
      );

      const buttons = screen.getByRole("button", {
        name: "Next",
      });

      await UserEvent.click(buttons);

      expect(useState).toHaveBeenCalled();
    });
    test("And if the user click on button next with page not full it should call the toast", async () => {
      mockSelector = mockGameArray;

      render(
        <Provider store={store}>
          <Pagination page={state} setPage={useState} />
        </Provider>
      );

      const buttons = screen.getByRole("button", {
        name: "Next",
      });

      await UserEvent.click(buttons);

      expect(toast.info).toHaveBeenCalled();
    });

    test("And if the user click on button Previous and the page is 1 it should call the toast modal", async () => {
      mockSelector = mockGameArraySix;

      render(
        <Provider store={store}>
          <Pagination page={state} setPage={useState} />
        </Provider>
      );

      const buttons = screen.getByRole("button", {
        name: "Previous",
      });

      await UserEvent.click(buttons);

      expect(toast.info).toHaveBeenCalled();
    });

    test("And if the user click on button Previous and the page is 2 it should call the setState", async () => {
      mockSelector = mockGameArraySix;
      const state2 = 2;
      render(
        <Provider store={store}>
          <Pagination page={state2} setPage={useState} />
        </Provider>
      );

      const buttons = screen.getByRole("button", {
        name: "Previous",
      });

      await UserEvent.click(buttons);

      expect(useState).toHaveBeenCalled();
    });
  });
});
