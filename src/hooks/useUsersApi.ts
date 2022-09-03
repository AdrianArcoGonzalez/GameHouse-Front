import axios from "axios";
import { useDispatch } from "react-redux";
import { LoginUser } from "../interfaces/interfaces";
import { logInUserActionCreator } from "../store/slice/usersSlice";
import decodeToken from "../utils/auth";

const useUsersApi = () => {
  const backUrl = process.env.REACT_APP_URL_BACK;

  const dispatch = useDispatch();
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

      const { data } = response;
      const user = decodeToken(data.user.token);
      const loginUser = { ...user, isLogged: true };

      dispatch(logInUserActionCreator(loginUser));
      localStorage.setItem("token", user.token);
    } catch (error) {}
  };
  return { registerUser, loginUser };
};

export default useUsersApi;
