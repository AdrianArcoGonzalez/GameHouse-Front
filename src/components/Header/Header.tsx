import { useState } from "react";
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
              <li className="burguer-menu__menu--item">Home</li>
              <li className="burguer-menu__menu--item">My Collection</li>
              <li className="burguer-menu__menu--item">Games</li>
              <li className="burguer-menu__menu--item">Sign In</li>
              <li className="burguer-menu__menu--item">Sign Up</li>
            </ul>
          </section>
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
