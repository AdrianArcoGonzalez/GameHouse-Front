import { NavLink } from "react-router-dom";
import JoinUsStyled from "./JoinUsStyled";

const JoinUs = (): JSX.Element => {
  return (
    <JoinUsStyled>
      <img
        src="/images/joinComunity.jpg"
        alt="Video Game characters riding birds running on a field"
        height="300px"
        width="320px"
        className="join-us__image"
      />
      <div className="join-us__info-container">
        <h3 className="join-us__title">Join the community!</h3>
        <p className="join-us__text">
          Become a soldier of the GameHouse Army. Make your own reviews and give
          and receive feedback from other soldiers!
        </p>
        <button className="join-us__button">
          <NavLink className="join-us__navigate" to={"/register"}>
            Sign Up
          </NavLink>
        </button>
        <button className="join-us__button">
          <NavLink className="join-us__navigate" to="/login">
            Sign In
          </NavLink>
        </button>
      </div>
    </JoinUsStyled>
  );
};

export default JoinUs;
