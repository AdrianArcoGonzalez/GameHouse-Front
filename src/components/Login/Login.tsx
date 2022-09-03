import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  const initialState = {
    username: "",
    password: "",
  };
  debugger;
  const [user, setUser] = useState(initialState);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };
  const hasEmptyFields =
    user.username === initialState.username ||
    user.password === initialState.password;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setUser(initialState);
  };

  return (
    <LoginStyled
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <h2 className="login__title">Sign In</h2>
      <label htmlFor="username" className="form__input-container">
        Username
      </label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        className="form__input-element"
        onChange={onChangeField}
      />

      <label htmlFor="password" className="form__input-container">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="*******"
        className="form__input-element"
        onChange={onChangeField}
      />
      <button type="submit" className="form-button" disabled={hasEmptyFields}>
        Sign In
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
