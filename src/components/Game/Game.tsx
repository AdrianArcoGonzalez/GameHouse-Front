import { Game as IGame } from "../../interfaces/interfaces";
import GameStyled from "./GameStyled";

interface GameProps {
  game: IGame;
}

const Game = ({ game: { category, image, title } }: GameProps): JSX.Element => {
  return (
    <GameStyled>
      <img
        src={image}
        alt={title}
        className="game__image"
        height="280px"
        width="200px"
      />
      <div className="game-info__container">
        <span className="game-info__element">{title}</span>
        <span className="game-info__element-category">{category}</span>
      </div>
    </GameStyled>
  );
};

export default Game;
