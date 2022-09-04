import { Game as IGame } from "../../interfaces/interfaces";
import Game from "../Game/Game";
import GamesStyled from "./GamesStyled";

interface GamesProps {
  games: IGame[];
}

const Games = ({ games }: GamesProps): JSX.Element => {
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
