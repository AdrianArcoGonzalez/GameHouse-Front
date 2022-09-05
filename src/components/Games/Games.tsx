import { useEffect } from "react";
import useGamesApi from "../../hooks/useGamesApi";
import { Game as IGame } from "../../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllGamesActionCreator } from "../../store/slice/gamesSlice";
import Game from "../Game/Game";
import GamesStyled from "./GamesStyled";

const Games = (): JSX.Element => {
  const { getAllGames } = useGamesApi();
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.games);

  useEffect(() => {
    (async () => {
      const games = await getAllGames();
      dispatch(getAllGamesActionCreator(games));
    })();
  }, [dispatch, getAllGames]);

  return (
    <GamesStyled>
      <ul className="games-list">
        {games.map((game: IGame) => (
          <li className="games-list__item">
            <Game game={game} key={game.title} />
          </li>
        ))}
      </ul>
    </GamesStyled>
  );
};
export default Games;
