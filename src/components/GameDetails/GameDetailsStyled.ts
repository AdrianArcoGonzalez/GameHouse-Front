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
  .image-container {
    @media (min-width: 850px) {
      height: 400px;
      width: 310px;
      margin: 20px;
    }
  }
  .details__ {
    &image {
      margin-top: 20px;
      border: 1px solid white;
      @media (min-width: 850px) {
        height: 400px;
        width: 310px;
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
          padding: 10px;
          @media (min-width: 850px) {
            padding: 10px;
            font-size: 2rem;
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
            bottom: 30px;
            right: 100px;
          }
        }
      }
    }
  }
`;

export default GameDetailsStyled;
