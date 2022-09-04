import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { Wrapper } from "../utils/Wrapper";
import "react-toastify/dist/ReactToastify.css";

describe("Given a Register Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the Register page snapshot", () => {
      const expectedRegisterPage = TestRenderer.create(
        <Wrapper>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Wrapper>
      );

      expect(expectedRegisterPage).toMatchSnapshot();
    });
  });
});
