import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore";
import DetailsPage from "../../pages/DetailsPage";
import { store } from "../../store/store";
import { Wrapper } from "../../utils/Wrapper";
import CredentialsLogout from "./CredentialsLogout";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Security Routes component", () => {
  describe("When it's instantiated and the user is login", () => {
    test("Then it should call the navigate method", () => {
      render(
        <Provider store={mockStore}>
          <CredentialsLogout>
            <h1>User Login</h1>
          </CredentialsLogout>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });

    test("And if the user isn`t logged in it should return a heading", () => {
      render(
        <Provider store={store}>
          <CredentialsLogout>
            <h1>User Login</h1>
          </CredentialsLogout>
        </Provider>
      );
      const userLogin = screen.getByRole("heading");

      expect(userLogin).toBeInTheDocument();
    });
  });
});
