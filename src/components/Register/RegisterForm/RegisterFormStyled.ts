import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  flex: 1;
  padding: 20px;
  font-family: "Roboto";

  .form__input {
    &-container {
      max-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 200px;
      padding: 5px;
      gap: 10px;
    }
    &-element {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      width: 100%;
      max-width: 200px;
      text-align: center;
      font-family: inherit;
    }
  }
  .form-button {
    font-family: inherit;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: #2f78ed;
    color: white;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid white;
  }
  .form-button:hover {
    background-color: #002d75;
    font-weight: bold;
  }
`;
export default RegisterFormStyled;
