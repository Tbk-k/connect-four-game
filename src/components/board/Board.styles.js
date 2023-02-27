import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: fit-content;
  position: relative;
  img {
    &:nth-of-type(odd) {
      position: absolute;
      z-index: 1;
    }
    &:nth-of-type(even) {
      position: relative;
      z-index: 10;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: 50px;
    cursor: pointer;
  }
`;

export const StyledMarker = styled.div`
  position: absolute;
  width: 100%;
  top: -40px;
  left: calc(100% / 21);
  /* transform: translateX(calc(100% / 7)); */
  transform: ${({ markerPosition }) => `translateX(${markerPosition}%)`};
  height: 20px;
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const AA = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: red;
`;
