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
        <div
          className="burguer-menu"
          data-testid="burguer"
          onClick={openCloseMenu}
        >
          <div className="burguer-menu__line"></div>
        </div>

        {menuVisible && (
          <section className="burguer-menu__menu">
            <ul>
              <li className="burguer-menu__menu--item">
                <NavLink to="/home" className="menu__link">
                  Home
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink to="/mycollection" className="menu__link">
                  My Collection
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink to="/games" className="menu__link">
                  Games
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink to="/login" className="menu__link">
                  Sign In
                </NavLink>
              </li>
              <li className="burguer-menu__menu--item">
                <NavLink to="/register" className="menu__link">
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
