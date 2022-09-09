import styled from "styled-components";

const CreateGameStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  background-color: #1e1c1f;
  width: 90%;
  border-radius: 20px;
  color: white;
  margin-bottom: 30px;
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }
  .form__input-element {
    text-align: center;
    padding: 5px;
    resize: none;
  }
  .form__input-label {
    padding: 10px;
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
    cursor: pointer;
    margin-bottom: 20px;
  }
  .form-button:hover {
    background-color: #002d75;
    font-weight: bold;
  }
`;

export default CreateGameStyled;
