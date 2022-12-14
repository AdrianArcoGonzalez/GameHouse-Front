import { SyntheticEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useGamesApi from "../../hooks/useGamesApi";
import { Game as IGame } from "../../interfaces/interfaces";
import { useAppSelector } from "../../store/hooks";
import GameDetailsStyled from "./GameDetailsStyled";

interface GameDetailsProps {
  game: IGame;
}

const GameDetails = ({
  game: { category, company, image, owner, title, sinopsis, id, imageBackUp },
}: GameDetailsProps): JSX.Element => {
  const { deleteGameById } = useGamesApi();
  const { username } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  const handleDelete = async (event: SyntheticEvent) => {
    event.preventDefault();
    await deleteGameById(id);
  };
  return (
    <GameDetailsStyled>
      <div className="image-container">
        <img
          src={imageBackUp}
          loading="lazy"
          alt={title}
          height={320}
          width={250}
          className="details__image"
        />
      </div>
      <article className="details__info-container">
        <h3 className="details__info-element-title"> {title}</h3>
        <p className="details__info-element"> {sinopsis}</p>
        <span className="details__info-element">
          <span className="details__info-element--title">Category: </span>
          {category}
        </span>
        <span className="details__info-element">
          <span className="details__info-element--title">Company: </span>
          {company}
        </span>
        <span className="details__info-element--owner">
          <span className="details__info-element--title">Created by: </span>
          {owner}
        </span>
        {owner === username && pathname !== `/details/${id}` && (
          <button className="button-delete" onClick={handleDelete}>
            Delete
          </button>
        )}
        {owner === username && pathname !== `/details/${id}` && (
          <NavLink to={`/edit-game/${id}`}>
            <button className="button-edit">Edit</button>
          </NavLink>
        )}
      </article>
    </GameDetailsStyled>
  );
};

export default GameDetails;
