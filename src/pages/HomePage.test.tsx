import { Wrapper } from "../utils/Wrapper";
import TestRenderer from "react-test-renderer";
import HomePage from "./HomePage";

describe("Given a Home Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the html from Home page", () => {
      const expectedHomePage = TestRenderer.create(
        <Wrapper>
          <HomePage />
        </Wrapper>
      );

      expect(expectedHomePage).toMatchSnapshot();
    });
  });
});
