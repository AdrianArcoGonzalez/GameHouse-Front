import { useState } from "react";
import RegisterCard from "../RegisterCard/RegisterCard";
import RegisterForm from "../RegisterForm/RegisterForm";
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
      <h2 className="register-title">Sign Up</h2>
      <div className="register-container">
        <RegisterCard user={userRegister} />
        <RegisterForm setUser={setUser} userRegister={userRegister} />
      </div>
    </RegisterStyled>
  );
};

export default Register;
