import { SyntheticEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGamesApi from "../../hooks/useGamesApi";
import { ProtoGame } from "../../interfaces/interfaces";
import { useAppSelector } from "../../store/hooks";
import EditGameStyled from "./EditGameStyled";

let formData = new FormData();

interface EditGameProps {
  game: ProtoGame;
}

const EditGame = ({ game }: EditGameProps): JSX.Element => {
  const { editGame } = useGamesApi();
  const [gameEdit, setEditGame] = useState(game);
  const { username } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditGame({
      ...gameEdit,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEditGame({
      ...gameEdit,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditGame({
      ...gameEdit,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    setEditGame({
      ...gameEdit,
      image: event.target.value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append("game", JSON.stringify({ ...gameEdit, owner: username }));
    await editGame(formData, id!);
    setEditGame(game);
    formData = new FormData();
    navigate("/my-collection");
  };

  return (
    <EditGameStyled noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title" className="form__input-label">
          Title
        </label>
        <input
          value={EditGameStyled.title}
          onChange={onChangeField}
          type="text"
          id="title"
          placeholder="Add a new title"
          className="form__input-element"
        />
      </div>

      <div className="input-container">
        <label htmlFor="company" className="form__input-label">
          Company
        </label>
        <input
          value={gameEdit.company}
          onChange={onChangeField}
          id="company"
          type="text"
          placeholder="Add a new Company"
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
          <option>Choose on</option>
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
          placeholder="Add a new sinosis"
          className="form__input-element"
          id="sinopsis"
          onChange={onChangeTextArea}
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
          className="form__input-element"
        />
      </div>
      <button className="form-button" type="submit">
        Edit
      </button>
    </EditGameStyled>
  );
};

export default EditGame;
