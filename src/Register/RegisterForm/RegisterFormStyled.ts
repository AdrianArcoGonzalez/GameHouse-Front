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
      text-align: center;
      font-family: inherit;
    }
  }
`;
export default RegisterFormStyled;
