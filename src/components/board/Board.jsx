import React, { useEffect, useState } from "react";
import BoardColumn from "../boardColumn/BoardColumn";
import Marker from "../marker/Marker";
import Score from "../score/Score";
import { BoardContainer, StyledBoard } from "./Board.styles";
const Board = () => {
  const [activePlayer, setActivePlayer] = useState("red");
  const [columnTargetId, setColumnTargetId] = useState(0);
  const [boardIsHover, setBoardIsHover] = useState(false);
  const [score, setScore] = useState({
    red: 0,
    yellow: 0,
  });
  const [board, setBoard] = useState(
    Array.from({ length: 7 }, () => Array.from({ length: 6 }, () => null))
  );

  const cols = board.length;
  const rows = board[0].length;

  const checkVertival = (score) => {
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows - 2; row++) {
        let player = board[col][row];
        if (
          player &&
          player === board[col][row + 1] &&
          player === board[col][row + 2]
        ) {
          score = { ...score, [player]: (score[player] += 3) };
        }
      }
    }
    return score;
  };

  const checkHoryzontal = (score) => {
    for (let col = 0; col < cols - 2; col++) {
      for (let row = 0; row < rows; row++) {
        let player = board[col][row];
        if (
          player &&
          player === board[col + 1][row] &&
          player === board[col + 2][row]
        ) {
          score = { ...score, [player]: (score[player] += 3) };
        }
      }
    }
    return score;
  };

  const checkDiagonal = (score) => {
    for (let col = 0; col < cols - 2; col++) {
      // top to bottom
      for (let row = 0; row < rows - 2; row++) {
        let player = board[col][row];
        if (
          player &&
          player === board[col + 1][row + 1] &&
          player === board[col + 2][row + 2]
        ) {
          score = { ...score, [player]: (score[player] += 3) };
        }
      }
      //bottom to top
      for (let row = 2; row < rows; row++) {
        let player = board[col][row];
        if (
          player &&
          player === board[col + 1][row - 1] &&
          player === board[col + 2][row - 2]
        ) {
          score = { ...score, [player]: (score[player] += 3) };
        }
      }
    }

    return score;
  };

  const checkForWin = () => {
    let newScore = {
      red: 0,
      yellow: 0,
    };
    newScore = checkHoryzontal(newScore);
    newScore = checkVertival(newScore);
    newScore = checkDiagonal(newScore);
    setScore(newScore);
  };

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

  return (
    <BoardContainer>
      <Score score={score} />
      <Marker
        activePlayer={activePlayer}
        columnTargetId={columnTargetId}
        boardIsHover={boardIsHover}
      />
      <StyledBoard
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {board.map((column, id) => (
          <BoardColumn
            key={id}
            id={id}
            column={column}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            findInColumn={checkForWin}
          />
        ))}
      </StyledBoard>
    </BoardContainer>
  );
};

export default Board;
