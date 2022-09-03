import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "../utils/Wrapper";
import LoginPage from "./LoginPage";
import TestRenderer from "react-test-renderer";

describe("Given a Register Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render the Register page", () => {
      const expectedLoginPage = TestRenderer.create(
        <Wrapper>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Wrapper>
      );

      expect(expectedLoginPage).toMatchSnapshot();
    });
  });
});
