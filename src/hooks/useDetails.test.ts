import { renderHook } from "@testing-library/react";
import { mockGame, mockGameArray } from "../mocks/mockGame";
import { Wrapper } from "../utils/Wrapper";
import useDetails from "./useDetails";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockGame.id }),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockGameArray,
}));
describe("Given a useDetails custom hook", () => {
  describe("When it's invoked", () => {
    test("Then it should a game", () => {
      const {
        result: { current },
      } = renderHook(useDetails, { wrapper: Wrapper });

      expect(current).toStrictEqual(mockGame);
    });
  });
});
