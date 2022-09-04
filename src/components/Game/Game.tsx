import { Game as IGame } from "../../interfaces/interfaces";
import GameStyled from "./GameStyled";

interface GameProps {
  game: IGame;
}

const Game = ({ game: { category, image, title } }: GameProps): JSX.Element => {
  return (
    <GameStyled>
      <img src={image} alt={title} />
      <div>
        <span className="game__info">{title}</span>
        <span className="game__info">Category: {category}</span>
      </div>
    </GameStyled>
  );
};

export default Game;
