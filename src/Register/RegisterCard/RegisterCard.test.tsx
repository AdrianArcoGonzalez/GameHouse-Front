import { render, screen } from "@testing-library/react";
import { FormState } from "../Register";
import RegisterCard from "./RegisterCard";

describe("Given a RegisterCard component", () => {
  describe("When it's instantiated with an user as props", () => {
    const user: FormState = {
      name: "Peter",
      birthdate: "10/12/1995",
      email: "peter@gmail.es",
      image: "peter.jpg",
      location: "New York",
      username: "peter123",
      password: "123456",
      repeatPassword: "123456",
    };

    test("Then it should the tittle of the card", () => {
      const titleCard = "GameHouse";

      render(<RegisterCard user={user} />);
      const title = screen.getByText(titleCard);

      expect(title).toBeInTheDocument();
    });

    test("And it should show a list with all the user data", () => {
      render(<RegisterCard user={user} />);
      const listItem = screen.getAllByRole("listitem");

      expect(listItem[0]).toHaveTextContent(user.name);
      expect(listItem[1]).toHaveTextContent(user.email);
      expect(listItem[2]).toHaveTextContent(user.birthdate);
      expect(listItem[3]).toHaveTextContent(user.location);
    });

    test("And it should show an image", () => {
      render(<RegisterCard user={user} />);
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });

    test("And it should show the username from the user data", () => {
      render(<RegisterCard user={user} />);
      const username = screen.getByText(user.username);

      expect(username).toBeInTheDocument();
    });
  });
});
