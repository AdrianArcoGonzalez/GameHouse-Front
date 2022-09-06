import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore";
import DetailsPage from "../../pages/DetailsPage";
import { Wrapper } from "../../utils/Wrapper";
import SecurityRoutes from "./SecurityRoutes";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Security Routes component", () => {
  describe("When it's instantiated and the user isn't login", () => {
    test("Then it should call the navigate method", () => {
      render(
        <SecurityRoutes>
          <DetailsPage />
        </SecurityRoutes>,
        { wrapper: Wrapper }
      );

      expect(mockNavigate).toHaveBeenCalled();
    });

    test("And if the user is logged in it should return a heading", () => {
      render(
        <Provider store={mockStore}>
          <SecurityRoutes>
            <h1>User Login</h1>
          </SecurityRoutes>
        </Provider>
      );
      const userLogin = screen.getByRole("heading");

      expect(userLogin).toBeInTheDocument();
    });
  });
});
