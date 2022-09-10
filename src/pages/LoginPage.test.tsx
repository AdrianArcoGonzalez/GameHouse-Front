import { Wrapper } from "../utils/Wrapper";
import LoginPage from "./LoginPage";
import TestRenderer from "react-test-renderer";
import { render } from "@testing-library/react";

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

    test("And it should call the method window scroll", async () => {
      window.scrollTo = jest.fn();

      render(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
