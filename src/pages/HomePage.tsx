import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import "react-toastify/dist/ReactToastify.css";
import Games from "../components/Games/Games";
import HomePageStyled from "./HomePageStyled";
import JoinUs from "../components/JoinUs/JoinUs";
import useGamesApi from "../hooks/useGamesApi";
import { useEffect } from "react";

const HomePage = (): JSX.Element => {
  const { getAllGames } = useGamesApi();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      await getAllGames();
    })();
  }, [getAllGames]);

  return (
    <HomePageStyled>
      <HeroSection text={heroTexts.home} srcImage={"images/home.webp"} />
      <h2 className="games-list__title">Comunity Games</h2>
      <Games />
      <JoinUs />
    </HomePageStyled>
  );
};

export default HomePage;
