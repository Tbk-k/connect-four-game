import styled from "styled-components";

export const StyledColumn = styled.div`
  height: 100%;
  width: calc(100% / 7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 40px;
`;

export const StyledCell = styled.div`
  width: 80%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
  border: 3px solid black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), inset 0px 10px 0px #000000;
  position: relative;
  &[data-color="red"] {
    background-color: ${({ theme }) => theme.colors.red};
    box-shadow: 0px 1px 2px #000000, inset 0px 5px 4px 3px rgba(0, 0, 0, 0.5);
  }
  &[data-color="yellow"] {
    background-color: ${({ theme }) => theme.colors.yellow};
    box-shadow: 0px 1px 2px #000000, inset 0px 5px 4px 3px rgba(0, 0, 0, 0.5);
  }
  &::after,
  &::before {
    content: "";
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
  }
  &[data-is-winning-cell="true"] {
    &::before {
      width: 58%;
      background-color: white;
    }
    &::after {
      width: 25%;
      background-color: inherit;
    }
  }
`;
