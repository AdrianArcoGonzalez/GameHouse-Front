import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockGame } from "../mocks/mockGame";
import { store } from "../store/store";
import MyCollectionPage from "./MyCollectionPage";

const mockUseGames = {
  getByOwner: jest.fn().mockResolvedValue(mockGame),
};

jest.mock("../hooks/useGamesApi", () => () => mockUseGames);

describe("Given a mycollection page", () => {
  describe("When it's instantiated", () => {
    test("Then it should call the useAppSelector", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyCollectionPage />
          </Provider>
        </BrowserRouter>
      );
    });
  });
});
