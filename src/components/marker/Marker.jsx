import React from "react";
import styled from "styled-components";
import { ReactComponent as RedMarker } from "../../assets/img/marker-red.svg";
import { ReactComponent as YellowMarker } from "../../assets/img/marker-yellow.svg";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 27px;
  padding-bottom: 5px;
  svg {
    display: none;
    transition: transform 0.25s cubic-bezier(0.17, 0.67, 0.38, 0.95),
      opacity 0.25s linear;
    opacity: ${({ boardIsHover }) => (boardIsHover ? 1 : 0)};
  }
  @media screen and (min-width: 1024px) {
    svg {
      display: block;

      transform: ${({ columnTargetId }) =>
        `translateX(${columnTargetId * 92.5}px)`};
    }
  }
`;

const Marker = ({ activePlayer, columnTargetId, boardIsHover }) => {
  let pointer =
    activePlayer === "red" ? (
      <RedMarker id="marker" />
    ) : (
      <YellowMarker id="marker" />
    );
  return (
    <Wrapper columnTargetId={columnTargetId} boardIsHover={boardIsHover}>
      {pointer}
    </Wrapper>
  );
};

export default Marker;
