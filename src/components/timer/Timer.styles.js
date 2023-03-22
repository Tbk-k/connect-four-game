import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 20px 20px 0 0;
  position: absolute;
  width: 100%;
  left: 0;
`;

export const InnerWrapper = styled.div`
  transform: translateY(-20px);
  width: fit-content;
  width: fit-content;
  height: fit-content;
  position: relative;
  z-index: 10;
  margin: 0 auto;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin: 0;
      font: ${({ theme }) => theme.fonts.heading.XS};
      color: ${({ theme }) => theme.colors.white};
    }
    p {
      font: ${({ theme }) => theme.fonts.heading.L};
      margin: 0;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
