import { NavLink } from "react-router-dom";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  return (
    <LoginStyled noValidate autoComplete="off">
      <h2 className="login__title">Sign In</h2>
      <label htmlFor="username" className="form__input-container">
        Name
      </label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        className="form__input-element"
      />

      <label htmlFor="password" className="form__input-container">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="*******"
        className="form__input-element"
      />
      <button type="submit" className="form-button">
        Sign in
      </button>

      <span className="form__info">
        Haven't an account yet? Go to{" "}
        <NavLink to={"/register"} className="info__link">
          Sign Up
        </NavLink>
      </span>
    </LoginStyled>
  );
};

export default Login;
