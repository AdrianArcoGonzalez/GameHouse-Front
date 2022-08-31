import { FormState } from "../Register/Register";
import RegisterCardStyled from "./RegisterCardStyled";

interface RegisterCardProps {
  user: FormState;
}

const RegisterCard = ({ user }: RegisterCardProps): JSX.Element => {
  const { birthdate, email, location, name, username } = user;
  return (
    <RegisterCardStyled data-testid="cardRegister">
      <div className="card">
        <span className="card__title">GameHouse</span>
        <div className="card__user">
          <ul className="card__left-side">
            <li className="left-side__info-element">{name}</li>
            <li className="left-side__info-element">{email}</li>
            <li className="left-side__info-element">{birthdate}</li>
            <li className="left-side__info-element">{location}</li>
          </ul>
          <div className="card__right-side">
            <img
              className="card__right-side--image"
              src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
              alt="avatar"
              height="100px"
              width="100px"
            />
            <span className="card__right-side--username">{username}</span>
          </div>
        </div>
      </div>
    </RegisterCardStyled>
  );
};

export default RegisterCard;
