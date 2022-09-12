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
      await getAllGames(1);
      return;
    }
    await getByCategory(state.category);
  };
  return (
    <FilterStyled noValidate onSubmit={handleGetCategory}>
      <div className="input-container">
        <label htmlFor="category" className="title">
          Category
        </label>
        <select
          id="category"
          onChange={onChangeSelect}
          className="select-input"
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
      <button className="button" type="submit">
        Search
      </button>
    </FilterStyled>
  );
};

export default Filter;
