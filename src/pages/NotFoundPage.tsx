import { NavLink } from "react-router-dom";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  window.scroll({ top: 0 });
  return (
    <>
      <HeroSection srcImage="/images/notFound.jpg" text={heroTexts.notFound} />
      <NotFoundPageStyled>
        <span className="not-found__title">404 Page Not Found</span>

        <NavLink to={"/home"} className="not-found__link">
          Go Home
        </NavLink>
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
