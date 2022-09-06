import { Wrapper } from "../utils/Wrapper";
import LoginPage from "./LoginPage";
import TestRenderer from "react-test-renderer";

describe("Given a Login Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the the Login page screenshot", () => {
      const expectedLoginPage = TestRenderer.create(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );

      expect(expectedLoginPage).toMatchSnapshot();
    });
  });
});
