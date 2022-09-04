import styled from "styled-components";

const GamesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  .games-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    background-color: #1e1c1f;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .games-list__item {
    padding: 20px;
  }
`;

export default GamesStyled;
