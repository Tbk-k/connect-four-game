import styled from "styled-components";

export const BoardContainer = styled.div`
  max-width: 550px;
  height: 100%;
  width: 100%;
  flex-grow: 0;
  @media screen and (min-width: 1024px) {
    margin-top: 50px;
    max-width: 650px;
  }
`;

export const StyledBoard = styled.div`
  width: 100%;
  aspect-ratio: 1.08;
  min-width: 335px;
  background-color: white;
  margin: 0 auto;
  border-radius: 20px;
  ${({ theme }) => `box-shadow: ${theme.boxShadow.btn.idle}`};
  display: flex;
  cursor: pointer;
  position: relative;
  z-index: 10;
  &:hover {
    #marker {
      opacity: 1;
    }
  }
`;
