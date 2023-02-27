import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
  div {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    border: 3px solid black;
    box-shadow: ${({ theme }) => theme.boxShadow.btn.idle};
    padding: 10px 35px;
    position: relative;
    h3 {
      font: ${({ theme }) => theme.fonts.heading.XS};
      text-transform: uppercase;
      margin: 0;
    }
    p {
      font: ${({ theme }) => theme.fonts.heading.M};
      font-size: 32px;
      margin: 0;
      text-align: center;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .player-one {
      left: -20%;
    }
    .player-two {
      right: -20%;
    }
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin: 0;
    div {
      position: absolute;
      padding: 48px 26px 17px;
      &:first-of-type {
        left: -180px;
      }
      &:last-of-type {
        right: -180px;
      }
      svg {
        top: -25%;
        transform: translateX(-50%);
      }
      .player-one {
        left: 50%;
      }
      .player-two {
        right: 0;
        left: 50%;
      }
    }
  }
`;
