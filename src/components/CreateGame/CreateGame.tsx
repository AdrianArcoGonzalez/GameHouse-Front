import { SyntheticEvent, useState } from "react";
import useGamesApi from "../../hooks/useGamesApi";
import { useAppSelector } from "../../store/hooks";
import CreateGameStyled from "./CreateGameStyled";

const initialGameState = {
  title: "",
  category: "",
  company: "",
  sinopsis: "",
  image: "",
  likes: 0,
  dislikes: 0,
  owner: "",
  reviews: [""],
};
let formData = new FormData();

const CreateGame = (): JSX.Element => {
  const { createGame } = useGamesApi();
  const [gameCreate, setCreateGame] = useState(initialGameState);
  const { username } = useAppSelector((state) => state.user);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateGame({
      ...gameCreate,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeSelect = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    debugger;
    setCreateGame({
      ...gameCreate,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    setCreateGame({
      ...gameCreate,
      image: event.target.value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append("game", JSON.stringify({ ...gameCreate, owner: username }));
    await createGame(formData);
    setCreateGame(initialGameState);
    formData = new FormData();
  };

  const hasEmptyFields =
    gameCreate.title === initialGameState.title ||
    gameCreate.sinopsis === initialGameState.sinopsis ||
    gameCreate.company === initialGameState.company ||
    gameCreate.category === initialGameState.category;

  return (
    <CreateGameStyled noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title" className="form__input-label">
          Title
        </label>
        <input
          value={gameCreate.title}
          onChange={onChangeField}
          type="text"
          id="title"
          placeholder="Assassins Creed 3"
          className="form__input-element"
        />
      </div>

      <div className="input-container">
        <label htmlFor="company" className="form__input-label">
          Company
        </label>
        <input
          value={gameCreate.company}
          onChange={onChangeField}
          id="company"
          type="text"
          placeholder="FromSoftware"
          className="form__input-element"
        />
      </div>

      <div className="input-container">
        <label htmlFor="category" className="form__input-label">
          Category
        </label>
        <select
          id="category"
          onChange={onChangeSelect}
          className="form__input-element"
        >
          <option>Choose One</option>
          <option>Adventure</option>
          <option>Strategy</option>
          <option>MOBA</option>
          <option>Shooter</option>
          <option>Platforms</option>
          <option>Simulator</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="sinopsis" className="form__input-label">
          Sinopsis
        </label>
        <textarea
          rows={10}
          cols={20}
          placeholder="Add a description of the game"
          className="form__input-element"
          id="sinopsis"
          onChange={onChangeSelect}
        ></textarea>
      </div>

      <div className="input-container">
        <label htmlFor="image" className="form__input-label">
          Image
        </label>
        <input
          id="image"
          onChange={onChangeFile}
          type="file"
          value={gameCreate.image}
          className="form__input-element"
        />
      </div>
      <button className="form-button" type="submit" disabled={hasEmptyFields}>
        Create
      </button>
    </CreateGameStyled>
  );
};

export default CreateGame;
