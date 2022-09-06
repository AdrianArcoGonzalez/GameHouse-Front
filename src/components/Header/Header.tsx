import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logOutUserActionCreator } from "../../store/slice/usersSlice";
import { RootState } from "../../store/store";
import HeaderStyled from "./HeaderStyled";
const Header = (): JSX.Element => {
  const isLogged = useAppSelector((state: RootState) => state.user.isLogged);
  const dispatch = useAppDispatch();
  const [menuVisible, setMenuVisible] = useState(false);

  const logout = () => {
    dispatch(logOutUserActionCreator());
    localStorage.clear();
  };

  const openCloseMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <HeaderStyled>
      <h1 className="header__title">GameHouse</h1>
      <nav className="navigation">
        {isLogged && (
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        )}
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
                  to="/my-collection"
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
