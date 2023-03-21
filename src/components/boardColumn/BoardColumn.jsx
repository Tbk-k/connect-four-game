import React, { useState } from "react";
import { StyledCell, StyledColumn } from "./BoardColumn.styles";

const BoardColumn = ({
  column,
  id,
  activePlayer,
  setActivePlayer,
  findInColumn,
}) => {
  const handleClick = () => {
    let emptyCellIndex = column.lastIndexOf(null);
    if (emptyCellIndex === -1) return;
    column.splice(emptyCellIndex, 1, activePlayer);
    setActivePlayer((prev) => (prev === "red" ? "yellow" : "red"));
    findInColumn();
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
