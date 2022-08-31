import axios from "axios";

const useUsersApi = () => {
  const backUrl = process.env.REACT_APP_URL_BACK;

  const registerUser = async (formData: FormData) => {
    try {
      const response = await axios({
        method: "post",
        url: `${backUrl}games/users/register`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = response;
      return data;
    } catch (error) {}
  };
  return { registerUser };
};

export default useUsersApi;
