import { act, renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { Wrapper } from "../utils/Wrapper";
import useGamesApi from "./useGamesApi";
import { toast } from "react-toastify";
import { mockGame } from "../mocks/mockGame";

jest.mock("react-toastify");

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useGamesApi custom hook", () => {
  describe("When it's invoked with getOneGameById with the correct id", () => {
    test("Then it should return a game with this id", async () => {
      const {
        result: {
          current: { getOneGameById },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });
      const game = await getOneGameById(mockGame.id);

      await expect(game).toStrictEqual(mockGame);
    });

    test("And if can't return a game it should call the error toast", async () => {
      const {
        result: {
          current: { getOneGameById },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });
      await getOneGameById("123123123123123123");

      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with getAllGames method", () => {
    test("Then it should dispatch all games received", async () => {
      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await act(async () => {
        await getAllGames();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });

    test("And if it get an error getting all games it should call the error toast", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: { games: [] } });

      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });
      await getAllGames();

      expect(mockDispatch).not.toBeCalled();
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
