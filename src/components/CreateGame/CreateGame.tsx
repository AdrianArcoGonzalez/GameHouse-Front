import { SyntheticEvent, useState } from "react";
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
  reviews: [],
};
const formData = new FormData();

const CreateGame = (): JSX.Element => {
  const { username } = useAppSelector((state) => state.user);
  const [gameCreate, setCreateGame] = useState(initialGameState);

  const onChangeField = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateGame({
      ...gameCreate,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setCreateGame({ ...gameCreate, owner: username });
    formData.append("game", JSON.stringify(gameCreate));
    setCreateGame(initialGameState);
  };

  const hasEmptyFields =
    gameCreate.title === initialGameState.title ||
    gameCreate.company === initialGameState.company ||
    gameCreate.category === initialGameState.category ||
    gameCreate.sinopsis === initialGameState.sinopsis;

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
          placeholder="title"
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
          <option>Adventure</option>
          <option>Shooter</option>
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
          placeholder="Add a description of the game"
          className="form__input-element"
          id="sinopsis"
          onChange={onChangeField}
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
