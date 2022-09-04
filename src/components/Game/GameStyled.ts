import styled from "styled-components";

const GameStyled = styled.article`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .game {
    &__image {
      border: 1px solid white;
      object-fit: cover;
      object-position: center;
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
