import UIReducer, { initialStateUI, isLoadingActionCreator } from "./uiSlice";

describe("Given a UIReducer function", () => {
  describe("When it's invoked with an unknown action and the wrong state", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const uiReducerReturn = UIReducer(wrongState, unkownAction);

      expect(uiReducerReturn).toStrictEqual(initialStateUI);
    });
  });

  describe("And if it receive the correct state an a good action", () => {
    test("Then it should return the new state with is Loading toggled", () => {
      const action = isLoadingActionCreator();

      const reducerReturn = UIReducer(initialStateUI, action);

      expect(reducerReturn).toStrictEqual({
        isLoading: !initialStateUI.isLoading,
      });
    });
  });
});
