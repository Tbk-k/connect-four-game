import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 79px;
  width: 100%;
  border: ${({ isGame }) => isGame && `3px solid black`};
  padding: ${({ isGame }) => isGame && `70px 40px 60px`};
  box-shadow: ${({ theme, isGame }) => isGame && theme.boxShadow.btn.idle};
  background-color: ${({ theme, isGame }) => isGame && theme.colors.purple};
  border-radius: 20px;
  h2 {
    font: ${({ theme }) => theme.fonts.heading.L};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: 0;
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    border: 3px solid black;
    box-shadow: ${({ theme }) => theme.boxShadow.btn.idle};
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 20px;
    padding: 70px 40px 60px;
  }
`;
