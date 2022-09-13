import styled from "styled-components";

const PaginationStyled = styled.section`
  display: flex;
  background-color: #1e1c1f;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80px;
  border-radius: 20px;
  margin-bottom: 20px;
  font-family: "Roboto";
  padding: 20px;
  .page-info {
    color: white;
  }
  .button {
    background-color: #114db1;
    border: 1px solid white;
    color: white;
    font-family: inherit;
    padding: 10px;
    border-radius: 20px;
    width: 80px;

    :hover {
      font-weight: bold;
      background-color: darkblue;
    }
  }
`;

export default PaginationStyled;
