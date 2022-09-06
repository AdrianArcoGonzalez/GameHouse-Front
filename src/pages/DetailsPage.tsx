import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameDetails from "../components/GameDetails/GameDetails";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import useGamesApi from "../hooks/useGamesApi";
import { Game } from "../interfaces/interfaces";

const initialState: Game = {
  category: "",
  company: "",
  dislikes: 0,
  id: "",
  image: "",
  likes: 0,
  owner: "",
  sinopsis: "",
  title: "",
  reviews: [""],
};

const DetailsPage = (): JSX.Element => {
  const [game, setGame] = useState(initialState);
  const { getOneGameById } = useGamesApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      debugger;
      const game = await getOneGameById(id!);
      setGame(game as unknown as Game);
    })();
  }, [getOneGameById, id]);

  return (
    <>
      <HeroSection
        text={heroTexts.details}
        srcImage={"/images/detailsHeader.jpg"}
      />
      <GameDetails game={game} />
    </>
  );
};

export default DetailsPage;
