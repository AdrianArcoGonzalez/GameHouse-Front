import styled from "styled-components";

const RegisterCardStyled = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;
    flex: 2;
    height: 600px;
    .card {
      flex-direction: column;
      align-items: flex-start;
      width: 480px;
      height: 280px;
      background-color: grey;
      border-radius: 20px;
      color: white;
      background-image: url("/images/backgroundCardForm.png");
      background-repeat: no-repeat;
      background-size: cover;
      font-family: "Roboto";
      border: 1px solid white;
      padding: 30px;
      position: sticky;
      top: 250px;
      text-transform: uppercase;

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
    .card__right-side--image {
      border-radius: 50%;
    }
    .left-side__info-element {
      padding: 5px;
    }
  }
`;

export default RegisterCardStyled;
