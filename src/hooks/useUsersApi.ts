import axios from "axios";
import { LoginUser } from "../interfaces/interfaces";

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

  const loginUser = async (user: LoginUser) => {
    try {
      const response = await axios.post(`${backUrl}games/users/login`, user);

      return response;
    } catch (error) {}
  };
  return { registerUser, loginUser };
};

export default useUsersApi;
