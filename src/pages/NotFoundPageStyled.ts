import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100vw;
  font-family: "Roboto";
  .not-found__ {
    &title {
      color: white;
      padding: 20px;
      margin-bottom: 5px;
    }
    &link {
      text-decoration: none;
      color: #2f78ed;
      padding: 20px;
      cursor: pointer;
      :hover {
        color: white;
      }
    }
  }
`;

export default NotFoundPageStyled;
