import { BoardWrapper, InnerWrapper, Wrapper } from "./Board.styles";
import BlackLayerSmall from "../../assets/img/board-layer-black-small.svg";
import WhiteLayerSmall from "../../assets/img/board-layer-white-small.svg";
import WhiteLayerLarge from "../../assets/img/board-layer-white-large.svg";
import BlackLayerLarge from "../../assets/img/board-layer-black-large.png";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as RedMarker } from "../../assets/img/marker-red.svg";
import { ReactComponent as YellowMarker } from "../../assets/img/marker-yellow.svg";
import Score from "../score/Score";
import Timer from "../timer/Timer";
import BoardColumns from "../boardColumns/BoardColumns";
import Marker from "../marker/Marker";

const Board = () => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [targetId, setTargetId] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Score />
        <BoardWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Marker
            activePlayer={activePlayer}
            targetId={targetId}
            isHovering={isHovering}
          />
          <img
            srcSet={`${BlackLayerSmall} 640w, ${BlackLayerLarge} 1024w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px"
            src={BlackLayerSmall}
            alt=""
          />
          <img
            srcSet={`${WhiteLayerSmall} 640w, ${WhiteLayerLarge} 1024w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px"
            src={WhiteLayerSmall}
            alt=""
          />
          <BoardColumns setTargetId={setTargetId} />
        </BoardWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Board;
