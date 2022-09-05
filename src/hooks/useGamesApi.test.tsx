import { renderHook } from "@testing-library/react";
import { mockGameArray } from "../mocks/mockGame";
import { Wrapper } from "../utils/Wrapper";
import useGamesApi from "./useGamesApi";

describe("Given a useGamesApi custom hook", () => {
  describe("When it's invoked with getAllGames method", () => {
    test("Then it should return all games on database", async () => {
      const fakeGames = mockGameArray;
      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(useGamesApi, { wrapper: Wrapper });
      const games = await getAllGames();

      expect(games).toStrictEqual(fakeGames);
    });
  });
});
