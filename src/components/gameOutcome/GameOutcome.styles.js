import styled from "styled-components";

export const InnerWrapper = styled.div`
  width: 285px;
  height: 170px;
  border-radius: 20px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow.btn.idle};
  border: 3px solid black;
  text-align: center;
  padding: 17px 0;
  p {
    text-transform: uppercase;
    &:first-of-type {
      font: ${({ theme }) => theme.fonts.heading.XS};
      margin: 0;
    }
    &:last-of-type {
      font: ${({ theme }) => theme.fonts.heading.L};
      margin: 0;
    }
  }
  button {
    font: ${({ theme }) => theme.fonts.heading.XS};
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    border-radius: 20px;
    border: none;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    padding: 10px 20px;
    transition: background-color 0.3s;
    &:hover{
        background-color: ${({ theme }) => theme.colors.red};;
    }
  }
`;
