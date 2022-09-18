import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  object-fit: cover;

  .loading-animation {
    max-width: 100%;
    width: 90%;

    @media (min-width: 850px) {
      object-fit: cover;
      height: 100%;
    }
  }
`;

export default LoadingStyled;
