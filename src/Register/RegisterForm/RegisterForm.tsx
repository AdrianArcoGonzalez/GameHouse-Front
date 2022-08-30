import { SyntheticEvent } from "react";
import { FormState, initialState } from "../Register";
import RegisterFormStyled from "./RegisterFormStyled";

interface RegisterFormProps {
  user: FormState;
  setUser: (user: FormState) => void;
}

const formData = new FormData();

const RegisterForm = ({ user, setUser }: RegisterFormProps): JSX.Element => {
  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    formData.append("image", event.target.files![0]);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setUser(initialState);
  };
  return (
    <RegisterFormStyled noValidate autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__input-container">
        Name
        <input
          value={user.name}
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
          value={user.email}
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
          value={user.birthdate}
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
          value={user.location}
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
          value={user.image}
          className="form__input-element"
        />
      </label>

      <label htmlFor="username" className="form__input-container">
        Username
        <input
          value={user.username}
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
          value={user.password}
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
          value={user.repeatPassword}
          onChange={onChangeField}
          type="password"
          name="repeatPassword"
          className="form__input-element"
          placeholder="********"
        />
      </label>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
