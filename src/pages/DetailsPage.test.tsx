import DetailsPage from "./DetailsPage";
import { Provider } from "react-redux";
import mockStore from "../mocks/mockStore";
import { mockGame } from "../mocks/mockGame";
import TestRenderer from "react-test-renderer";

jest.mock("../hooks/useDetails", () => () => mockGame);

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={mockStore}>{children}</Provider>
);
describe("Given a DetailsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match the screenshoot", async () => {
      const detailsSnapshot = TestRenderer.create(
        <Wrapper>
          <DetailsPage />
        </Wrapper>
      );

      expect(detailsSnapshot).toMatchSnapshot();
    });
  });
});
