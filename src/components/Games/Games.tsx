import { Game as IGame } from "../../interfaces/interfaces";
import Game from "../Game/Game";
import GamesStyled from "./GamesStyled";

interface GamesProps {
  games: IGame[];
}

const Games = ({ games }: GamesProps): JSX.Element => {
  return (
    <GamesStyled>
      {games.map((game: IGame) => (
        <li>
          <Game game={game} key={game.title} />
        </li>
      ))}
    </GamesStyled>
  );
};
export default Games;
