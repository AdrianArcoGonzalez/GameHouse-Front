import styled from "styled-components";

const RegisterStyled = styled.section`
  display: flex;
  font-family: "Roboto";
  align-items: center;
  background-color: #1e1c1f;
  border-radius: 20px;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  color: white;

  .register-title {
    border-bottom: 2px white solid;
    width: 80%;
    text-align: center;
    padding: 10px;
  }
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default RegisterStyled;
