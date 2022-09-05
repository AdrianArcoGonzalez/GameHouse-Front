import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const useDetails = () => {
  const games = useAppSelector((state) => state.games);
  let { id } = useParams();

  const game = games.find((game) => game.id === id);

  return game;
};

export default useDetails;
