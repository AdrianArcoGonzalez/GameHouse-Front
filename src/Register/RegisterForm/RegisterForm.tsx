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
      [event.target.name]: event.target.value,
    });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append("user", JSON.stringify(userRegister));
    setUser(initialState);
  };

  return (
    <RegisterFormStyled noValidate autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__input-container">
        Name
        <input
          value={userRegister.name}
          onChange={onChangeField}
          type="text"
          name="name"
          placeholder="name"
          className="form__input-element"
        />
      </label>

      <label htmlFor="email" className="form__input-container">
        Email
        <input
          value={userRegister.email}
          onChange={onChangeField}
          type="email"
          placeholder="john@gmail.com"
          name="email"
          className="form__input-element"
        />
      </label>

      <label htmlFor="birthdate" className="form__input-container">
        Birthdate
        <input
          value={userRegister.birthdate}
          onChange={onChangeField}
          type="date"
          placeholder="20/02/2020"
          name="birthdate"
          className="form__input-element"
        />
      </label>

      <label htmlFor="location" className="form__input-container">
        Location
        <input
          value={userRegister.location}
          onChange={onChangeField}
          type="text"
          name="location"
          className="form__input-element"
          placeholder="Barcelona"
        />
      </label>

      <label htmlFor="image" className="form__input-container">
        Image
        <input
          onChange={onChangeFile}
          type="file"
          name="image"
          value={userRegister.image}
          className="form__input-element"
        />
      </label>

      <label htmlFor="username" className="form__input-container">
        Username
        <input
          value={userRegister.username}
          onChange={onChangeField}
          type="text"
          name="username"
          className="form__input-element"
          placeholder="Gamer123"
        />
      </label>

      <label htmlFor="password" className="form__input-container">
        Password
        <input
          value={userRegister.password}
          onChange={onChangeField}
          type="password"
          name="password"
          className="form__input-element"
          placeholder="********"
        />
      </label>

      <label htmlFor="repeatPassword" className="form__input-container">
        Repeat Password
        <input
          value={userRegister.repeatPassword}
          onChange={onChangeField}
          type="password"
          name="repeatPassword"
          className="form__input-element"
          placeholder="********"
        />
      </label>
      <button type="submit">Register</button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
