import styled from "styled-components";

const JoinUsStyled = styled.section`
  font-family: "Roboto";
  color: white;
  width: 100%;
  position: relative;
  .join-us__ {
    &image {
      width: 100vw;
      object-fit: cover;
    }
    &info-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.7);
      width: 90%;
      position: absolute;
      border-radius: 20px;
      top: 5%;
      left: 5%;
      @media (min-width: 850px) {
        top: 15%;
        left: 22%;
        height: fit-content;
        width: fit-content;
      }
    }
    &title {
      padding: 5px;
      text-transform: uppercase;
    }
    &text {
      width: 80%;
      padding: 5px;
      text-align: center;
    }
    &button {
      font-family: inherit;
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
        background-color: #002d75;
        font-weight: bold;
      }
    }
    &navigate {
      text-decoration: none;
      color: white;
    }
  }
`;

export default JoinUsStyled;
