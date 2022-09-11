import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditGame from "../components/EditGame/EditGame";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import useGamesApi from "../hooks/useGamesApi";
import { ProtoGame } from "../interfaces/interfaces";
import EditGamePageStyled from "./EditGamePageStyled";

const initialState: ProtoGame = {
  category: "",
  company: "",
  dislikes: 0,
  image: "",
  likes: 0,
  owner: "",
  sinopsis: "",
  title: "",
  reviews: [""],
};
const EditGamePage = (): JSX.Element => {
  const { id } = useParams();
  const [game, setGame] = useState(initialState);
  const { getOneGameById } = useGamesApi();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      const game = await getOneGameById(id!);
      setGame(game);
    })();
  }, [getOneGameById, id]);

  return (
    <EditGamePageStyled>
      <HeroSection srcImage="/images/editGame.webp" text={heroTexts.editGame} />
      <h2 className="title">Edit Game</h2>
      <EditGame game={game} />
    </EditGamePageStyled>
  );
};

export default EditGamePage;
