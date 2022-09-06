import { Game as IGame } from "../../interfaces/interfaces";
import GameDetailsStyled from "./GameDetailsStyled";

interface GameDetailsProps {
  game: IGame;
}

const GameDetails = ({
  game: { category, company, image, owner, title, sinopsis },
}: GameDetailsProps): JSX.Element => {
  return (
    <GameDetailsStyled>
      <img
        src={`${image}`}
        alt={`${title}`}
        height={320}
        width={250}
        className="details__image"
      />
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
      </article>
    </GameDetailsStyled>
  );
};

export default GameDetails;
