import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGameBoard } from "../../features/gameBoard";
import { resetTimer } from "../../features/timerSlice";
import { StyledCell, StyledColumn } from "./BoardColumn.styles";

const BoardColumn = ({ column, id }) => {
  let activePlayer = useSelector((state) => state.activePlayer);
  const dispatch = useDispatch();
  const handleClick = () => {
    let emptyCellIndex = column.lastIndexOf(null);
    if (emptyCellIndex === -1) return;
    dispatch(
      updateGameBoard({ columnId: id, cellId: emptyCellIndex, activePlayer })
    );
    dispatch(resetTimer(activePlayer === "red" ? "yellow" : "red"));
  };

  return (
    <StyledColumn onClick={handleClick} id={id}>
      {column.map((cell, cellId) => (
        <StyledCell key={cellId} data-color={cell} />
      ))}
    </StyledColumn>
  );
};

export default BoardColumn;
