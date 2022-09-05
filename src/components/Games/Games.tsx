import { useEffect } from "react";
import useGamesApi from "../../hooks/useGamesApi";
import { Game as IGame } from "../../interfaces/interfaces";
import Game from "../Game/Game";
import GamesStyled from "./GamesStyled";

interface GamesProps {
  games: IGame[];
}

const Games = ({ games }: GamesProps): JSX.Element => {
  const { getAllGames } = useGamesApi();

  useEffect(() => {
    (async () => {
      const games = await getAllGames();
    })();
  }, [getAllGames]);
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
