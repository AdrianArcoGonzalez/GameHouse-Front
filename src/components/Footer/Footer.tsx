import {
  faComputer,
  faComputerMouse,
  faGamepad,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return (
    <FooterStyled>
      <h2 className="footer__title">GameHouse</h2>
      <div className="fotter__icons-container">
        <span className="footer__icons">
          <FontAwesomeIcon icon={faGamepad} />
        </span>
        <span className="footer__icons">
          <FontAwesomeIcon icon={faComputer} />
        </span>
        <span className="footer__icons">
          <FontAwesomeIcon icon={faComputerMouse} />
        </span>
        <span className="footer__icons">
          <FontAwesomeIcon icon={faMobileScreen} />
        </span>
      </div>

      <div className="footer__links">
        <NavLink to="/home" className="footer__link">
          Home
        </NavLink>
        <NavLink to="/my-collection" className="footer__link">
          My Collection
        </NavLink>
        {!isLogged && (
          <NavLink to="/login" className="footer__link">
            Sign In
          </NavLink>
        )}

        {!isLogged && (
          <NavLink to="/register" className="footer__link">
            Sign Up
          </NavLink>
        )}
      </div>
      <span className="footer__sentence">
        © 2022 GameHouse Inc. Adrian Arco Gonzalez
      </span>
    </FooterStyled>
  );
};

export default Footer;
