import { Game as IGame } from "../../interfaces/interfaces";
import { useAppSelector } from "../../store/hooks";
import Game from "../Game/Game";
import GamesStyled from "./GamesStyled";

const Games = (): JSX.Element => {
  const games = useAppSelector((state) => state.games);

  return (
    <GamesStyled>
      <ul className="games-list">
        {games.map((game: IGame) => (
          <li className="games-list__item" key={game.id}>
            <Game game={game} />
          </li>
        ))}
      </ul>
    </GamesStyled>
  );
};
export default Games;
