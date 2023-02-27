import { InnerWrapper, StyledMarker, Wrapper } from "./Board.styles";
import BlackLayerSmall from "../../assets/img/board-layer-black-small.svg";
import WhiteLayerSmall from "../../assets/img/board-layer-white-small.svg";
import BlackLayerLarge from "../../assets/img/board-layer-black-large.png";
import WhiteLayerLarge from "../../assets/img/board-layer-white-large.svg";
import Score from "../score/Score";
import Timer from "../timer/Timer";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as RedMarker } from "../../assets/img/marker-red.svg";
import { ReactComponent as YellowMarker } from "../../assets/img/marker-yellow.svg";

const Board = () => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const bordRef = useRef(null);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let Marker = activePlayer === 1 ? <RedMarker /> : <YellowMarker />;

  return (
    <Wrapper>
      <InnerWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "fit-content" }}
      >
        <Score />

        {isHovering && (
          <StyledMarker markerPosition={100 / markerPosition}>
            {Marker}
          </StyledMarker>
        )}
        <img
          srcSet={`${BlackLayerSmall} 640w, ${BlackLayerLarge} 1024w`}
          sizes="(max-width: 768px) 700px, (max-width: 1024px) 100vw, 1024px"
          src={BlackLayerSmall}
          alt=""
        />
        <img
          srcSet={`${WhiteLayerSmall} 640w, ${WhiteLayerLarge} 1024w`}
          sizes="(max-width: 768px) 700px, (max-width: 1024px) 100vw, 1024px"
          src={WhiteLayerSmall}
          alt=""
        />
        <Board />
      </InnerWrapper>
      <Timer activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
    </Wrapper>
  );
};

export default Board;
