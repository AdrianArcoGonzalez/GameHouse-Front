import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import useGamesApi from "../../hooks/useGamesApi";
import { Game as IGame } from "../../interfaces/interfaces";
import { useAppSelector } from "../../store/hooks";
import GameStyled from "./GameStyled";

interface GameProps {
  game: IGame;
}

const Game = ({
  game: { category, image, title, id, owner },
}: GameProps): JSX.Element => {
  const { username } = useAppSelector((state) => state.user);
  const { deleteGameById } = useGamesApi();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };

  const handleDelete = async (event: SyntheticEvent) => {
    event.preventDefault();
    await deleteGameById(id);
  };

  return (
    <>
      <GameStyled onClick={handleNavigate}>
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
      {owner === username ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Game;
