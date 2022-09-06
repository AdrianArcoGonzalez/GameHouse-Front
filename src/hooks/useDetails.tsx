import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";

const useDetails = () => {
  const games = useSelector((state: RootState) => state.games);

  let { id } = useParams();

  const game = games.find((game) => game.id === id);

  return game;
};

export default useDetails;
