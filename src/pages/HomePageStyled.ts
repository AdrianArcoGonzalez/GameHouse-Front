import styled from "styled-components";

const HomePageStyled = styled.div`
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .games-list__title {
    border-bottom: 1px solid white;
    text-align: center;
    color: white;
    padding: 20px;
    margin-bottom: 30px;
    width: 90%;

    @media (min-width: 850px) {
      margin-top: 30px;
    }
  }
`;

export default HomePageStyled;
