import { renderHook } from "@testing-library/react";
import useUsersApi from "./useUsersApi";

describe("Given a useUsersApi custom hook", () => {
  describe("When it's invoked with registerUser method", () => {
    test("Then it should call return a response", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUsersApi);

      //registerUser()
    });
  });
});
