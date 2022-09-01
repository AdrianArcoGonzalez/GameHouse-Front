import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  font-family: "Roboto";
  width: 100%;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);

  .header__title {
    color: #2f78ed;
    margin-left: 5px;
    @media (min-width: 850px) {
      margin-left: 40px;
    }
  }

  .burguer-menu {
    margin-right: 8px;
    @media (min-width: 850px) {
      margin-right: 40px;
    }
    &__line {
      background-color: white;
      height: 5px;
      width: 30px;
      border-radius: 10px;
    }
    &__line::after {
      position: absolute;
      bottom: 10px;
      content: "";
      background-color: white;
      height: 5px;
      width: 30px;
      border-radius: 10px;
    }
    &__line::before {
      content: "";
      position: absolute;
      top: 10px;
      background-color: white;
      height: 5px;
      width: 30px;
      border-radius: 10px;
    }
    &__menu {
      animation-name: move-in;
      animation-duration: 0.5s;
      position: absolute;
      top: 45px;
      right: 30px;
      color: white;
      background-color: #141215;

      &--item {
        text-align: center;
        border: 1px solid white;
        padding: 15px;
      }
    }
  }

  @keyframes move-in {
    from {
      transform: translateX(50px);
    }
    to {
      transform: translate(0);
    }
  }
`;

export default HeaderStyled;
