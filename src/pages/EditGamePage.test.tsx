import { Wrapper } from "../utils/Wrapper";
import TestRenderer from "react-test-renderer";
import { render } from "@testing-library/react";
import EditGamePage from "./EditGamePage";

describe("Given a Edit Game Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the html from Edit Game page", () => {
      const expectedHomePage = TestRenderer.create(
        <Wrapper>
          <EditGamePage />
        </Wrapper>
      );

      expect(expectedHomePage).toMatchSnapshot();
    });

    test("And it should call the method window scroll", async () => {
      window.scrollTo = jest.fn();

      render(
        <Wrapper>
          <EditGamePage />
        </Wrapper>
      );

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
