import styled from "styled-components";

const GameStyled = styled.article`
  display: flex;
  color: white;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: fit-content;
  :hover {
    .game-info__container {
      display: flex;
    }
  }

  .game {
    &__image {
      border: 1px solid white;
      object-fit: cover;
      object-position: center;

      @media (min-width: 850px) {
        height: 400px;
        width: 300px;
      }
    }

    &-info__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      position: absolute;
      width: 198px;
      height: 100px;
      bottom: 20px;
      margin: 0 auto;
      background-color: rgba(20, 18, 21, 0.9);

      @media (min-width: 850px) {
        display: none;
        height: 150px;
        width: 298px;
      }
    }
    &-info__element {
      font-family: "Roboto";
      font-weight: bold;
      &-category {
        font-size: 0.8rem;
      }
    }
  }
`;

export default GameStyled;
