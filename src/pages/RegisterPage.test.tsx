import TestRenderer from "react-test-renderer";
import RegisterPage from "./RegisterPage";
import { Wrapper } from "../utils/Wrapper";
import "react-toastify/dist/ReactToastify.css";

describe("Given a Register Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the Register page snapshot", () => {
      const expectedRegisterPage = TestRenderer.create(
        <Wrapper>
          <RegisterPage />
        </Wrapper>
      );

      expect(expectedRegisterPage).toMatchSnapshot();
    });
  });
});
