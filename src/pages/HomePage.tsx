import { ToastContainer } from "react-toastify";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import "react-toastify/dist/ReactToastify.css";
import Games from "../components/Games/Games";
import { mockGameArray } from "../mocks/mockGame";
import HomePageStyled from "./HomePageStyled";
import JoinUs from "../components/JoinUs/JoinUs";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <ToastContainer />
      <HeroSection text={heroTexts.home} srcImage={"images/home.webp"} />
      <h2 className="games-list__title">Comunity Games</h2>
      <Games games={mockGameArray} />
      <JoinUs />
    </HomePageStyled>
  );
};

export default HomePage;
