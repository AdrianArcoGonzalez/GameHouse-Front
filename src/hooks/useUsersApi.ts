import axios from "axios";
import { LoginUser } from "../interfaces/interfaces";
import decodeToken from "../utils/auth";

const useUsersApi = () => {
  const backUrl = process.env.REACT_APP_URL_BACK;

  const registerUser = async (formData: FormData) => {
    try {
      const response = await axios.post(
        `${backUrl}games/users/register/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response;
    } catch (error) {}
  };

  const loginUser = async (userData: LoginUser) => {
    try {
      const response = await axios.post(
        `${backUrl}games/users/login`,
        userData
      );

      const { data } = response as any;
      const userInfo = decodeToken(data.user.token);

      localStorage.setItem("token", userInfo.token);
    } catch (error) {}
  };
  return { registerUser, loginUser };
};

export default useUsersApi;
