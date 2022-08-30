import { SyntheticEvent } from "react";
import { FormState, initialState } from "../Register";
import RegisterFormStyled from "./RegisterFormStyled";

interface RegisterFormProps {
  userRegister: FormState;
  setUser: (user: FormState) => void;
}

const RegisterForm = ({
  userRegister,
  setUser,
}: RegisterFormProps): JSX.Element => {
  const formData = new FormData();

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...userRegister,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...userRegister,
      [event.target.id]: event.target.value,
    });
    formData.append("image", event.target.files![0]);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    debugger;
    event.preventDefault();
    formData.append("user", JSON.stringify(userRegister));
    setUser(initialState);
  };

  const hasEmptyFields =
    userRegister.name === initialState.name ||
    userRegister.email === initialState.email ||
    userRegister.birthdate === initialState.birthdate ||
    userRegister.location === initialState.location ||
    userRegister.username === initialState.username ||
    userRegister.password === initialState.password ||
    userRegister.repeatPassword === initialState.repeatPassword ||
    userRegister.image === initialState.image;

  return (
    <RegisterFormStyled
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      data-testid="formRegister"
    >
      <label htmlFor="name" className="form__input-container">
        Name
      </label>
      <input
        value={userRegister.name}
        onChange={onChangeField}
        type="text"
        id="name"
        placeholder="name"
        className="form__input-element"
      />

      <label htmlFor="email" className="form__input-container">
        Email
      </label>
      <input
        value={userRegister.email}
        onChange={onChangeField}
        id="email"
        type="email"
        placeholder="john@gmail.com"
        className="form__input-element"
      />
      <label htmlFor="birthdate" className="form__input-container">
        Birthdate
      </label>
      <input
        id="birthdate"
        value={userRegister.birthdate}
        onChange={onChangeField}
        type="date"
        placeholder="20/02/2020"
        className="form__input-element"
      />

      <label htmlFor="location" className="form__input-container">
        Location
      </label>
      <input
        id="location"
        value={userRegister.location}
        onChange={onChangeField}
        type="text"
        className="form__input-element"
        placeholder="Barcelona"
      />

      <label htmlFor="image" className="form__input-container">
        Image
      </label>
      <input
        id="image"
        onChange={onChangeFile}
        type="file"
        value={userRegister.image}
        className="form__input-element"
      />

      <label htmlFor="username" className="form__input-container">
        Username
      </label>
      <input
        id="username"
        value={userRegister.username}
        onChange={onChangeField}
        type="text"
        className="form__input-element"
        placeholder="Gamer123"
      />

      <label htmlFor="password" className="form__input-container">
        Password
      </label>
      <input
        id="password"
        value={userRegister.password}
        onChange={onChangeField}
        type="password"
        className="form__input-element"
        placeholder="********"
      />

      <label htmlFor="repeatPassword" className="form__input-container">
        Repeat Password
      </label>
      <input
        id="repeatPassword"
        value={userRegister.repeatPassword}
        onChange={onChangeField}
        type="password"
        className="form__input-element"
        placeholder="********"
      />

      <button type="submit" disabled={hasEmptyFields}>
        Register
      </button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
