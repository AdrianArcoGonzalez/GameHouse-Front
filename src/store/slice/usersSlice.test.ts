import usersReducer, {
  logInUserActionCreator,
  logOutUserActionCreator,
} from "./usersSlice";

describe("Given a usersReducer function", () => {
  const userInitial = { id: "", username: "", token: "", isLogged: false };
  describe("When it's invoked with an unknown action and the wrong state", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const usersReducersReturn = usersReducer(wrongState, unkownAction);

      expect(usersReducersReturn).toStrictEqual(userInitial);
    });
  });
  describe("And if it receive the correct state an a good action", () => {
    test("Then it should return the new state changed on login", () => {
      const payload = {
        id: "12345",
        username: "admin",
        token: "123123123123",
        isLogged: true,
      };

      const reducerReturn = usersReducer(
        userInitial,
        logInUserActionCreator(payload)
      );

      expect(reducerReturn).toStrictEqual(payload);
    });

    test("Then it should return the new state changed on logout", () => {
      const initialStateUsers = {
        id: "12345",
        username: "admin",
        token: "123123123123",
        isLogged: true,
      };

      const expectedStateUsers = {
        id: "",
        username: "",
        token: "",
        isLogged: false,
      };
      const reducerReturn = usersReducer(
        initialStateUsers,
        logOutUserActionCreator()
      );

      expect(reducerReturn).toStrictEqual(expectedStateUsers);
    });
  });
});
