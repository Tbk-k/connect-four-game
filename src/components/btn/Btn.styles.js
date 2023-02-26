import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 100%;
  font: ${({ theme }) => theme.fonts.heading.M};
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  border: 3px solid black;
  box-shadow: ${({ theme }) => theme.boxShadow.btn.idle};
  display: flex;
  justify-content: ${({ image }) => (image ? "space-between" : "flex-start")};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  align-items: center;
  margin-bottom: 30px;

  &:hover {
    border-color: ${({ theme, isGame }) =>
      isGame ? theme.colors.darkPurple : theme.colors.purple};
    box-shadow: ${({ theme, isGame }) =>
      isGame
        ? `${theme.boxShadow.btn.hover.mobile}, ${theme.boxShadow.btn.hover.tablet}`
        : theme.boxShadow.btn.hover.mobile};
  }

  @media screen and (min-width: 768px) {
    &:hover {
      border-color: ${({ theme, isGame }) =>
        isGame ? theme.colors.darkPurple : theme.colors.purple};
      box-shadow: ${({ theme, isGame }) =>
        isGame
          ? theme.boxShadow.btn.hover.tablet
          : theme.boxShadow.btn.hover.mobile};
    }
  }
`;
