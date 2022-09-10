import { Wrapper } from "../utils/Wrapper";
import CreateGamePage from "./CreateGamePage";
import TestRenderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Given a createGamePage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the screenshoot", async () => {
      const createGamePage = TestRenderer.create(
        <Wrapper>
          <CreateGamePage />
        </Wrapper>
      );

      expect(createGamePage).toMatchSnapshot();
    });

    test("And it should call the method window scroll", async () => {
      window.scrollTo = jest.fn();

      render(
        <Wrapper>
          <CreateGamePage />
        </Wrapper>
      );

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
