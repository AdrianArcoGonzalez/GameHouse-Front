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
      width: 300px;
      margin: 20px;
    }
  }
  .details__ {
    &image {
      margin-top: 20px;
      border: 1px solid white;
      @media (min-width: 850px) {
        height: 400px;
        width: 300px;
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
          width: 100%;
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
            bottom: 80px;
            right: 100px;
          }
        }
      }
    }
  }
  .button-delete {
    font-family: inherit;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: #be2525;
    color: white;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid white;
    cursor: pointer;
    margin-bottom: 10px;

    :hover {
      background-color: red;
      font-weight: bold;
    }
  }
  .button-edit {
    font-family: inherit;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: #2f78ed;
    color: white;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid white;
    cursor: pointer;
    margin-bottom: 10px;

    :hover {
      background-color: darkblue;
      font-weight: bold;
    }
  }
`;

export default GameDetailsStyled;
