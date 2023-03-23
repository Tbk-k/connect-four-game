import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 25px 20px 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding: 50px 20px 0;
  }
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 50%);
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 100;
`;
