import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 50px 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
