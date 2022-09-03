import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  font-family: "Roboto";
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: grey;
  background-color: #141215;
  gap: 20px;
  @media (min-width: 850px) {
    flex-direction: row;
    gap: 10px;
  }
  .footer {
    &__title {
      color: #2f78ed;
    }
    &__icons {
      padding: 5px;
    }
    &__sentence {
      font-size: 0.8rem;
    }
    &__links {
      display: none;
      @media (min-width: 850px) {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
      }
    }
    &__link {
      text-decoration: none;
      color: inherit;
      padding: 5px;
    }
    &__link:hover {
      color: white;
      font-weight: bold;
    }
  }
`;

export default FooterStyled;
