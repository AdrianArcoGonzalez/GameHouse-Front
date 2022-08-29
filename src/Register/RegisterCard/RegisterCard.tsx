import { FormState } from "../Register";
import RegisterCardStyled from "./RegisterCardStyled";

interface RegisterCardProps {
  user: FormState;
}

const RegisterCard = ({ user }: RegisterCardProps): JSX.Element => {
  const { birthdate, email, location, name, username } = user;
  return (
    <RegisterCardStyled>
      <span className="card__title">GameHouse</span>
      <div className="card__user">
        <ul className="card__left-side">
          <li className="left-side__info-element" placeholder="John Philips">
            {name}
          </li>
          <li className="left-side__info-element" placeholder="john@gmail.com">
            {email}
          </li>
          <li className="left-side__info-element" placeholder="1985-10-24">
            {birthdate}
          </li>
          <li className="left-side__info-element" placeholder="New York">
            {location}
          </li>
        </ul>
        <div className="card__right-side">
          <img
            className="card__right-side--image"
            src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
            alt="avatar"
            height="100px"
            width="100px"
          />
          <span className="card__right-side--username" placeholder="Gamer123">
            {username}
          </span>
        </div>
      </div>
    </RegisterCardStyled>
  );
};

export default RegisterCard;
