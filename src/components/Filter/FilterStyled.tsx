import styled from "styled-components";

const FilterStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-family: "Roboto";
  margin-bottom: 20px;
  background-color: #1e1c1f;
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  .title {
    color: white;
    padding: 10px;
  }
  .select-input {
    background-color: #1e1c1f;
    color: white;
    font-family: inherit;
    padding: 10px;
  }
  .button {
    background-color: #1e1c1f;
    border: 1px solid white;
    color: white;
    font-family: inherit;
    padding: 10px;
    border-radius: 20px;

    :hover {
      font-weight: bold;
      background-color: black;
    }
  }
`;

export default FilterStyled;
