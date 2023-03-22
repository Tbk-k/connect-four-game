import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../../features/gameScore";
import BoardColumn from "../boardColumn/BoardColumn";
import Marker from "../marker/Marker";
import Score from "../score/Score";
import Timer from "../timer/Timer";
import { BoardContainer, StyledBoard } from "./Board.styles";

const Board = () => {
  const [columnTargetId, setColumnTargetId] = useState(0);
  const [boardIsHover, setBoardIsHover] = useState(false);
  let board = useSelector((state) => state.gameBoard.board);
  let activePlayer = useSelector((state) => state.activePlayer);
  const dispatch = useDispatch();

  const handleMouseMove = (e) => {
    let targetId = e.target.id;
    if (!targetId && columnTargetId === targetId) {
      return;
    } else if (targetId) setColumnTargetId(targetId);
  };

  const handleMouseEnter = () => {
    setBoardIsHover(true);
  };
  const handleMouseLeave = () => {
    setBoardIsHover(false);
  };

  useEffect(() => {
    dispatch(updateScore(board));
  }, [activePlayer]);

  return (
    <BoardContainer>
      <Score />
      <Marker columnTargetId={columnTargetId} boardIsHover={boardIsHover} />
      <StyledBoard
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {board.map((column, id) => (
          <BoardColumn key={id} id={id} column={column} />
        ))}
      </StyledBoard>
      <Timer />
    </BoardContainer>
  );
};

export default Board;
