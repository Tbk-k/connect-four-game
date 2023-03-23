const checkVertical = (board, cols, rows) => {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows - 3; row++) {
      let player = board[col][row];
      if (
        player &&
        player === board[col][row + 1] &&
        player === board[col][row + 2] &&
        player === board[col][row + 3]
      ) {
        return [
          [col, row],
          [col, row + 1],
          [col, row + 2],
          [col, row + 3],
        ];
      }
    }
  }
};

const checkHorizontal = (board, cols, rows) => {
  for (let col = 0; col < cols - 3; col++) {
    for (let row = 0; row < rows; row++) {
      let player = board[col][row];
      if (
        player &&
        player === board[col + 1][row] &&
        player === board[col + 2][row] &&
        player === board[col + 3][row]
      ) {
        return [
          [col, row],
          [col + 1, row],
          [col + 2, row],
          [col + 3, row],
        ];
      }
    }
  }
};

const checkDiagonal = (board, cols, rows) => {
  for (let col = 0; col < cols - 3; col++) {
    //bottom to top
    for (let row = 3; row < rows; row++) {
      let player = board[col][row];
      if (
        player &&
        player === board[col + 1][row - 1] &&
        player === board[col + 2][row - 2] &&
        player === board[col + 3][row - 3]
      ) {
        return [
          [col, row],
          [col + 1, row - 1],
          [col + 2, row - 2],
          [col + 3, row - 3],
        ];
      }
    }
    //top to bottom
    for (let row = 0; row < rows; row++) {
      let player = board[col][row];
      if (
        player &&
        player === board[col + 1][row + 1] &&
        player === board[col + 2][row + 2] &&
        player === board[col + 3][row + 3]
      ) {
        return [
          [col, row],
          [col + 1, row + 1],
          [col + 2, row + 2],
          [col + 3, row + 3],
        ];
      }
    }
  }
};

export const checkForWin = (board, cols, rows) => {
  let winner = null;
  let winningSequence = null;
  winningSequence = checkVertical(board, cols, rows);
  if (!winningSequence) winningSequence = checkHorizontal(board, cols, rows);
  if (!winningSequence) winningSequence = checkDiagonal(board, cols, rows);
  if (winningSequence) {
    let [col, row] = winningSequence[0];
    winner = board[col][row];
    return { winningSequence, winner };
  } else {
    return { winningSequence, winner };
  }
};
