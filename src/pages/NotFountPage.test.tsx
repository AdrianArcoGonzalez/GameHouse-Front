import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TestRenderer from "react-test-renderer";
import { Wrapper } from "../utils/Wrapper";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the the NotFoundPage page screenshot", () => {
      const expectedNotFoundPage = TestRenderer.create(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      expect(expectedNotFoundPage).toMatchSnapshot();
    });

    test("And it should call the method window scroll", async () => {
      window.scrollTo = jest.fn();

      render(
        <Wrapper>
          <NotFoundPage />
        </Wrapper>
      );

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
