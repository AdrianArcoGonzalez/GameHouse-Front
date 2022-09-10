import { Wrapper } from "../utils/Wrapper";
import TestRenderer from "react-test-renderer";
import HomePage from "./HomePage";
import { render } from "@testing-library/react";

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

    test("And it should call the method window scroll", async () => {
      window.scrollTo = jest.fn();

      render(
        <Wrapper>
          <HomePage />
        </Wrapper>
      );

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
