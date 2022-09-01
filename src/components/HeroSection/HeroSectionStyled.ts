import styled from "styled-components";

const HeroSectionStyled = styled.section`
  font-family: "Roboto";
  font-size: 1.5rem;
  width: 100%;
  height: 250px;
  background-image: url("./images/form-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 850px) {
    height: 400px;
  }
  .hero-container {
    padding: 10px;
    width: 200px;
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    font-size: 1rem;
    @media (min-width: 850px) {
      height: 200px;
      width: 300px;
      font-size: 1.5rem;
      margin-left: 50px;
      padding: 5px;
    }
    &__sentence {
      color: white;
      font-family: inherit;
      padding: 10px;
      margin: 0;
    }
  }
`;

export default HeroSectionStyled;
