import { useNavigate } from "react-router-dom";
import { Game as IGame } from "../../interfaces/interfaces";

import GameStyled from "./GameStyled";

interface GameProps {
  game: IGame;
}

const Game = ({
  game: { category, image, title, id, owner, imageBackUp },
}: GameProps): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <GameStyled onClick={handleNavigate}>
        <img
          src={imageBackUp}
          alt={title}
          loading="lazy"
          className="game__image"
          height={280}
          width={200}
        />
        <div className="game-info__container">
          <span className="game-info__element">{title}</span>
          <span className="game-info__element-category">{category}</span>
        </div>
      </GameStyled>
    </>
  );
};

export default Game;
