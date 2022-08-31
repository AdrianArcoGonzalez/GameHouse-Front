import useUsersApi from "./useUsersApi";
import axios from "axios";
// interface WrapperProps {
//   children: JSX.Element | JSX.Element[];
// }

// const Wrapper = ({ children }: WrapperProps): JSX.Element => {
//   return <reactRedux.Provider store={store}>{children}</reactRedux.Provider>;
// };

const backURL = process.env.REACT_APP_URL_BACK as string;
const registerUrl = `${backURL}games/users/register`;
const fakeFormdata = new FormData();
const objectAxios = {
  data: fakeFormdata,
  method: "post",
  url: registerUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

jest.mock("axios");

describe("Given a useUserApi custom hook", () => {
  describe("When it's invoked with registerUser method", () => {
    test("Then it should call axios post method with the formdata", async () => {
      const { registerUser } = useUsersApi();
      await registerUser(fakeFormdata);

      expect(axios).toHaveBeenCalledWith(objectAxios);
    });
  });
});
