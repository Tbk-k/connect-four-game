import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
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

  @media screen and (min-width: 760px) {
    gap: 30px;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 15px 20px 15px 38px;
      &:last-of-type {
        flex-direction: row-reverse;
        padding: 15px 38px 15px 20px;
      }
      p {
        font: ${({ theme }) => theme.fonts.heading.L};
      }
      h3 {
        font: ${({ theme }) => theme.fonts.heading.S};
      }
      .player-one {
        left: -10%;
      }
      .player-two {
        right: -10%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(calc(-100% + 25px));
    margin: 0;

    div {
      width: fit-content;
      flex-direction: column;
      padding: 46px 40px 17px;
      &:last-of-type {
        flex-direction: column;
        transform: translateX(180%);
        padding: 46px 40px 17px;
      }
      &:first-of-type {
        transform: translateX(-180%);
      }
      svg {
        top: 0;
      }
      .player-one {
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .player-two {
        right: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
`;
