import { SyntheticEvent, useState } from "react";
import useGamesApi from "../../hooks/useGamesApi";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  const [state, setState] = useState({ category: "All" });
  const { getByCategory, getAllGames } = useGamesApi();

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };
  const handleGetCategory = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (state.category === "All") {
      await getAllGames();
      return;
    }
    await getByCategory(state.category);
  };
  return (
    <FilterStyled>
      <div className="input-container">
        <label htmlFor="category" className="form__input-label">
          Category
        </label>
        <select
          id="category"
          onChange={onChangeSelect}
          className="form__input-element"
        >
          <option>All</option>
          <option>Adventure</option>
          <option>Shooter</option>
          <option>Strategy</option>
          <option>MOBA</option>
          <option>Shooter</option>
          <option>Platforms</option>
          <option>Simulator</option>
        </select>
      </div>
      <button onSubmit={handleGetCategory}>Search</button>
    </FilterStyled>
  );
};

export default Filter;
