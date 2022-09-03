import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
const Header = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openCloseMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <HeaderStyled>
      <h1 className="header__title">GameHouse</h1>
      <nav className="navigation">
        <button className="burguer-menu__button" onClick={openCloseMenu}>
          <div className="burguer-menu" data-testid="burguer">
            <div className="burguer-menu__line"></div>
          </div>
        </button>
        {menuVisible && (
          <section className="burguer-menu__menu">
            <ul>
              <li className="burguer-menu__menu--item">
                <NavLink
                  to="/home"
                  className="menu__link"
                  onClick={openCloseMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink
                  to="/mycollection"
                  className="menu__link"
                  onClick={openCloseMenu}
                >
                  My Collection
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink
                  to="/games"
                  className="menu__link"
                  onClick={openCloseMenu}
                >
                  Games
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink
                  to="/login"
                  className="menu__link"
                  onClick={openCloseMenu}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink
                  to="/register"
                  className="menu__link"
                  onClick={openCloseMenu}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </section>
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
