import { useState } from "react";
import RegisterCard from "./RegisterCard/RegisterCard";
import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterStyled from "./RegisterStyled";

export interface FormState {
  name: string;
  email: string;
  birthdate: string;
  location: string;
  username: string;
  password: string;
  repeatPassword: string;
  image: string;
}

export const initialState: FormState = {
  name: "",
  email: "",
  birthdate: "",
  location: "",
  username: "",
  password: "",
  repeatPassword: "",
  image: "",
};
const Register = (): JSX.Element => {
  const [userRegister, setUser] = useState(initialState);

  return (
    <RegisterStyled>
      <RegisterCard user={userRegister} />
      <RegisterForm setUser={setUser} userRegister={userRegister} />
    </RegisterStyled>
  );
};

export default Register;
