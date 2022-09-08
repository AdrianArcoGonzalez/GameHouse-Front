import { act, renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { Wrapper } from "../utils/Wrapper";
import useGamesApi from "./useGamesApi";
import { toast } from "react-toastify";
import { mockGame } from "../mocks/mockGame";
import mockUser from "../mocks/mockUser";

jest.mock("react-toastify");

const mockSelector = mockUser;
const mockDispatch = jest.fn();
jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppSelector: () => mockSelector,
  useAppDispatch: () => mockDispatch,
}));

beforeEach(() => jest.clearAllMocks());

describe("Given a useGamesApi custom hook", () => {
  describe("When it's invoked with the method deleteGameById", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteGameById },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await deleteGameById("123123");

      await expect(mockDispatch).toHaveBeenCalled();
    });

    test("And if it receive an error it should call the error modal", async () => {
      axios.delete = jest.fn().mockRejectedValue(new Error());
      const {
        result: {
          current: { deleteGameById },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await deleteGameById("123");

      await expect(toast.error).toHaveBeenCalled();
    });
  });
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

      expect(toast.info).toHaveBeenCalled();
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
