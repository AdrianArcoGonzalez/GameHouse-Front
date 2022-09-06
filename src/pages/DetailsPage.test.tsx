import DetailsPage from "./DetailsPage";
import { mockGame } from "../mocks/mockGame";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../mocks/mockStore";
import { Provider } from "react-redux";

const mockNavigate = jest.fn().mockReturnValue(mockGame.id);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockGame.id }),
  useNavigate: () => mockNavigate,
}));
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={mockStore}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
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
