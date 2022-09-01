import { SyntheticEvent, useState } from "react";

const Header = (): JSX.Element => {
  const initialState: boolean = true;
  const [menuState, setMenuState] = useState(initialState);

  const openCloseMenu = (event: SyntheticEvent) => {
    setMenuState(!menuState);
  };
  return (
    <section className="hero-section">
      <header className="header">
        <h1 className="header__title">GameHouse</h1>
        <nav className="header__menu" onClick={openCloseMenu}>
          X
          <ul className={`menu__list${menuState ? "open" : "close"}`}>
            <li className="menu__list--item">Home</li>
            <li className="menu__list--item">My collection</li>
            <li className="menu__list--item">Games</li>
            <li className="menu__list--item">Sign Up</li>
            <li className="menu__list--item">Sign in</li>
          </ul>
        </nav>
      </header>
      <div className="hero-section__sentence-container">
        <span className="sentence-container--sentence"></span>
      </div>
    </section>
  );
};

export default Header;
