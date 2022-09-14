/* eslint-disable testing-library/no-await-sync-query */
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

  describe("When it's invoked with createGame method", () => {
    const formData = new FormData();
    test("Then if the data is ok it should call the toast succes", async () => {
      const {
        result: {
          current: { createGame },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await createGame(formData);

      expect(toast.success).toHaveBeenCalled();
    });

    test("Then if something gone wrong it should call the error toast", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());

      const {
        result: {
          current: { createGame },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await createGame(formData);

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
        await getAllGames(1);
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });

    describe("When it's invoked with method getByCategory", () => {
      test("Then it should call the dispatch if it got a filled array", async () => {
        const category = "Adventure";
        const {
          result: {
            current: { getByCategory },
          },
        } = renderHook(useGamesApi, { wrapper: Wrapper });

        await getByCategory(category);

        expect(mockDispatch).toHaveBeenCalled();
      });

      test("Then if it return an empty array it should call a modal", async () => {
        const category = "Action";
        const {
          result: {
            current: { getByCategory },
          },
        } = renderHook(useGamesApi, { wrapper: Wrapper });

        await getByCategory(category);

        expect(toast.info).toHaveBeenCalled();
      });

      test("And if it return an error it should call the error modal", async () => {
        const category = "MOBA";
        const {
          result: {
            current: { getByCategory },
          },
        } = renderHook(useGamesApi, { wrapper: Wrapper });

        await getByCategory(category);

        expect(toast.error).toHaveBeenCalled();
      });
    });
  });

  describe("When it's invoked with editGame", () => {
    test("Then it should call the toast succes", async () => {
      const formData = new FormData();
      const fakeId = "123";
      const {
        result: {
          current: { editGame },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await act(async () => {
        await editGame(formData, fakeId);
      });

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalled();
      });
    });

    test("And should call the error toast if it cannot complete the edit", async () => {
      const formData = new FormData();
      const fakeId = "123123";
      const {
        result: {
          current: { editGame },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await act(async () => {
        await editGame(formData, fakeId);
      });

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalled();
      });
    });
  });

  describe("When it's invoked with getByOwner method", () => {
    test("Then if the data is ok it should call de dispatch", async () => {
      const {
        result: {
          current: { getByOwner },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await getByOwner(mockUser.username);

      expect(mockDispatch).toHaveBeenCalled();
    });

    test("Then if the data is ok it should call the modal error", async () => {
      axios.get = jest.fn().mockRejectedValue(new Error());
      const {
        result: {
          current: { getByOwner },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });

      await getByOwner(mockUser.username);

      expect(toast.error).toHaveBeenCalled();
    });

    test("And if it get an error getting all games it should call the error toast", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: { games: [] } });
      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });
      await getAllGames(1);

      expect(mockDispatch).not.toBeCalled();
      expect(toast.info).toHaveBeenCalled();
    });
  });
});
