import { act, renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { Wrapper } from "../utils/Wrapper";
import useGamesApi from "./useGamesApi";
import { toast } from "react-toastify";

jest.mock("react-toastify");

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useGamesApi custom hook", () => {
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
      axios.get = jest.fn().mockResolvedValue([]);

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
