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
  z-index: 10;

  .header__title {
    color: #2f78ed;
    margin-left: 5px;
    @media (min-width: 850px) {
      margin-left: 40px;
    }
  }

  .burguer-menu {
    &__button {
      width: 50px;
      height: 30px;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      @media (min-width: 850px) {
        margin-right: 30px;
      }
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
      right: 23px;
      content: "";

      background-color: white;
      height: 5px;
      width: 30px;
      border-radius: 10px;
      @media (min-width: 850px) {
        margin-right: 30px;
      }
    }
    &__line::before {
      content: "";
      position: absolute;
      top: 10px;
      right: 23px;
      background-color: white;
      height: 5px;
      width: 30px;
      border-radius: 10px;
      @media (min-width: 850px) {
        margin-right: 30px;
      }
    }
    &__menu {
      animation-name: move-in;
      animation-duration: 0.5s;
      position: absolute;
      top: 45px;
      right: 40px;
      color: white;
      background-color: #141215;

      &--item {
        text-align: center;
        border: 1px solid white;
        padding: 15px;
        cursor: pointer;
      }
      &--item:hover {
        background-color: #504e52;
        font-weight: bold;
      }
      &--item:active {
        background-color: #504e52;
      }
    }
  }
  .menu__link {
    text-decoration: none;
    color: inherit;
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
