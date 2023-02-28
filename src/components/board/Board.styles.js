import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BoardWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    max-width: 584px;
    &:first-of-type {
      position: absolute;
      z-index: 1;
    }
    &:last-of-type {
      position: relative;
      z-index: 10;
    }
  }
`;

export const InnerWrapper = styled.div`
  margin-top: 50px;
`;
