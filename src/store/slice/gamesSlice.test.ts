import {
  mockGame,
  mockGame2,
  mockGame3,
  mockGameArray,
} from "../../mocks/mockGame";
import gamesReducer, {
  deleteGameActionCreator,
  getAllGamesActionCreator,
} from "./gamesSlice";

describe("Given a gamesReducer function", () => {
  const gamesInitial = mockGameArray;
  describe("When it's invoked with an unknown action and the wrong state", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const gamesReducersReturn = gamesReducer(wrongState, unkownAction);

      expect(gamesReducersReturn).toStrictEqual([]);
    });
  });
  describe("And if it receive the correct state an a good action", () => {
    test("Then it should return the new state with the game", () => {
      const action = getAllGamesActionCreator([mockGame]);

      const reducerReturn = gamesReducer(gamesInitial, action);

      expect(reducerReturn).toStrictEqual([mockGame]);
    });

    test("Then if the action is to delete it should return the new state without the game deleted", () => {
      const expectedStateGames = [mockGame2, mockGame3];

      const reducerReturn = gamesReducer(
        gamesInitial,
        deleteGameActionCreator(mockGame.id)
      );

      expect(reducerReturn).toStrictEqual(expectedStateGames);
    });
  });
});
