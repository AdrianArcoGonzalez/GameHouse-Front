import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";

describe("Given a Register Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render the Register page", () => {
      const expectedRegisterPage = TestRenderer.create(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      expect(expectedRegisterPage).toMatchSnapshot();
    });
  });
});
