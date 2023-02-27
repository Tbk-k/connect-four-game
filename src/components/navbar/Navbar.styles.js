import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  max-width: 650px;
  display: flex;
  justify-content: ${({ isGame }) => (isGame ? "space-between" : "center")};
  align-items: center;
  margin: 0 auto;
`;

export const StyledBtn = styled.button`
  font: ${({ theme }) => theme.fonts.heading.XS};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 30px;
  text-transform: uppercase;
  min-width: 130px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
