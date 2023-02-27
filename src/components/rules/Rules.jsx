import React from "react";
import { InnerWrapper, StyledBtn, Wrapper } from "./Rules.styles";
import { ReactComponent as CheckBtn } from "../../assets/img/icon-check.svg";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <h2>RULES</h2>
        <h4>OBJECTIVE</h4>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h4>HOW TO PLAY</h4>
        <ul>
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second on the next game.
          </li>
        </ul>
        <StyledBtn onClick={handleClick}>
          <CheckBtn />
        </StyledBtn>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Rules;
