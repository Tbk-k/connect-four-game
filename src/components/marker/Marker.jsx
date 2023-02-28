import React from "react";
import styled from "styled-components";
import { ReactComponent as RedMarker } from "../../assets/img/marker-red.svg";
import { ReactComponent as YellowMarker } from "../../assets/img/marker-yellow.svg";

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -40px;
  left: 28.5px;
  display: none;
  svg {
    transform: ${({ translateX }) => `translateX(${translateX}px)`};
    opacity: ${({ isHovering }) => !isHovering && 0};
    transition: transform 0.25s cubic-bezier(0.17, 0.67, 0.38, 0.95),
      opacity 0.25s linear;
  }
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const Marker = ({ activePlayer, targetId, isHovering }) => {
  const pointer = activePlayer === 1 ? <RedMarker /> : <YellowMarker />;
  let translateX = targetId && targetId * 81.33;
  return (
    <Wrapper translateX={translateX} isHovering={isHovering}>
      {pointer}
    </Wrapper>
  );
};

export default Marker;
