import { BrowserRouter } from "react-router-dom";

import TestRenderer from "react-test-renderer";
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
  });
});
