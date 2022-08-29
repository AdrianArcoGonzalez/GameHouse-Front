import { FormState } from "../Register";
import RegisterFormStyled from "./RegisterFormStyled";

interface RegisterFormProps {
  user: FormState;
  setUser: (user: FormState) => void;
}

const RegisterForm = ({ user, setUser }: RegisterFormProps): JSX.Element => {
  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <RegisterFormStyled noValidate autoComplete="off">
      <label htmlFor="name" className="form__input-container">
        Name
        <input
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
          onChange={onChangeField}
          type="file"
          name="image"
          className="form__input-element"
        />
      </label>

      <label htmlFor="username" className="form__input-container">
        Username
        <input
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
