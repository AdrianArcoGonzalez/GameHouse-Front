import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import useUsersApi from "../../hooks/useUsersApi";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  const { loginUser } = useUsersApi();
  const initialState = {
    username: "",
    password: "",
  };

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

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await loginUser(user);
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
        value={user.username}
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
        value={user.password}
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
