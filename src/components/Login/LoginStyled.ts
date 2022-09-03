import styled from "styled-components";

const LoginStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: #1e1c1f;
  font-family: "Roboto";
  width: 80%;
  border-radius: 20px;
  margin: 0 auto;
  padding: 30px;

  .login__title {
    border-bottom: 2px white solid;
    width: 80%;
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;
  }
  .form {
    &__input-container {
      padding: 15px;
    }
    &__input-element {
      font-family: inherit;
      padding: 5px;
      text-align: center;
    }
    &-button {
      font-family: inherit;
      width: 100px;
      height: 30px;
      border-radius: 20px;
      background-color: #2f78ed;
      color: white;
      padding: 5px;
      border: 1px solid white;
      margin-top: 30px;
      cursor: pointer;
    }
    &-button:hover {
      background-color: #002d75;
      font-weight: bold;
    }
    &__info {
      padding: 30px;
    }
  }
  .info__link {
    text-decoration: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default LoginStyled;
