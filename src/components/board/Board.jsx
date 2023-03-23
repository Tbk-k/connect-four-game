import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScore, updateWinner } from "../../features/gameScore";
import BoardColumn from "../boardColumn/BoardColumn";
import Marker from "../marker/Marker";
import Score from "../score/Score";
import { BoardContainer, OuterWrapper, StyledBoard } from "./Board.styles";
import Timer from "../timer/Timer";

const Board = () => {
  const [columnTargetId, setColumnTargetId] = useState(0);
  const [boardIsHover, setBoardIsHover] = useState(false);
  let board = useSelector((state) => state.gameBoard.board);
  let { activePlayer } = useSelector((state) => state.timerSlice);
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
    dispatch(updateWinner(board));
    dispatch(updateScore(board));
  }, [activePlayer, board, dispatch]);

  return (
    <OuterWrapper>
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
      </BoardContainer>
      <Timer />
    </OuterWrapper>
  );
};

export default Board;
