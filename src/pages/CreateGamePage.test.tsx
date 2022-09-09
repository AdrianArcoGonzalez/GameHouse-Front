import { Wrapper } from "../utils/Wrapper";
import CreateGamePage from "./CreateGamePage";

import TestRenderer from "react-test-renderer";

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
  });
});
