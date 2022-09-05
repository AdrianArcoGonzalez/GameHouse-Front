import { useParams } from "react-router-dom";
import GameDetails from "../components/GameDetails/GameDetails";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";

import { useAppSelector } from "../store/hooks";

const DetailsPage = (): JSX.Element => {
  window.scroll({ top: 0 });
  const games = useAppSelector((state) => state.games);
  let { id } = useParams();
  const game = games.find((game) => game.id === id);

  return (
    <>
      <HeroSection
        text={heroTexts.details}
        srcImage={"/images/detailsHeader.jpg"}
      />
      <GameDetails game={game!} />
    </>
  );
};

export default DetailsPage;
