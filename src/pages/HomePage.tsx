import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import "react-toastify/dist/ReactToastify.css";
import Games from "../components/Games/Games";
import HomePageStyled from "./HomePageStyled";
import JoinUs from "../components/JoinUs/JoinUs";
import useGamesApi from "../hooks/useGamesApi";
import { useEffect, useState } from "react";
import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";

const HomePage = (): JSX.Element => {
  const { getAllGames } = useGamesApi();
  const [page, setPage] = useState(1);
  const [totalGames, setTotalGames] = useState(6);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      const totalGames = await getAllGames(page);
      setTotalGames(totalGames);
    })();
  }, [getAllGames, page]);

  return (
    <HomePageStyled>
      <HeroSection text={heroTexts.home} srcImage={"images/home.webp"} />
      <h2 className="games-list__title">Comunity Games</h2>
      <Filter />
      <Games />
      <Pagination page={page} setPage={setPage} totalGames={totalGames} />
      <JoinUs />
    </HomePageStyled>
  );
};

export default HomePage;
