import styled from "styled-components";

const RegisterCardStyled = styled.div`
  width: 500px;
  height: 300px;
  flex-direction: column;
  background-color: grey;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  color: white;
  background-image: url("/images/backgroundCard.png");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  border: 1px solid white;
  padding: 30px;
  margin-left: 30px;

  .card {
    &__title {
      color: blue;
    }

    &__user {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      justify-content: space-between;
    }

    &__left-side {
      display: flex;
      padding: 0;
      margin: 0;
      flex-direction: column;
      list-style: none;
    }

    &__right-side {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      height: 100%;

      &--image {
        padding: 5px;
      }

      &--username {
        padding: 5px;
      }
    }
  }

  .left-side__info-element {
    padding: 5px;
  }
`;

export default RegisterCardStyled;
