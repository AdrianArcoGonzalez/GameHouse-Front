import styled from "styled-components";

const GameDetailsStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  background-color: #141215;
  color: white;
  font-family: "Roboto";
  border-radius: 20px;
  margin: 20px auto;

  @media (min-width: 850px) {
    height: 500px;
    flex-direction: row;
  }
  .details__ {
    &image {
      margin-top: 20px;
      border: 1px solid white;
      object-fit: cover;
      @media (min-width: 850px) {
        height: 400px;
        width: 320px;
        margin: 20px;
      }
    }
    &info {
      &-container {
        margin: 0;
        display: flex;
        flex-direction: column;
        padding: 10px;
        @media (min-width: 850px) {
          position: relative;
          align-items: flex-start;
        }
      }
      &-element {
        padding: 10px;
        display: flex;
        margin: 0;
        flex-direction: column;
        &-title {
          @media (min-width: 850px) {
            font-size: 2rem;
            padding: 10px;
          }
        }
        &--title {
          font-weight: bold;
        }
        &--owner {
          display: flex;
          flex-direction: column;
          padding: 10px;
          @media (min-width: 850px) {
            flex-direction: row;
            gap: 5px;
            position: absolute;
            bottom: -60px;
            right: 100px;
          }
        }
      }
    }
  }
`;

export default GameDetailsStyled;
