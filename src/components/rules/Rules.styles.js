import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 3px solid black;
  box-shadow: ${({ theme }) => theme.boxShadow.btn.idle};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  max-width: 480px;
  position: relative;
  h2 {
    font: ${({ theme }) => theme.fonts.heading.L};
    text-align: center;
    margin: 11px 0 28px;
  }
  h4 {
    font: ${({ theme }) => theme.fonts.heading.S};
    color: ${({ theme }) => theme.colors.purple};
    margin: 0 0 16px;
  }
  p {
    font: ${({ theme }) => theme.fonts.paragraph};
    color: #565656;
    margin-bottom: 33px;
  }
  ul {
    margin: 0;
    padding: 0 20px 60px;
    list-style: decimal;
    li {
      font: ${({ theme }) => theme.fonts.paragraph};
      color: #565656;
      margin-bottom: 10px;
      padding-left: 15px;
    }
  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;
