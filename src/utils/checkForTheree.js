const findThreeHorizontal = (board, cols, rows, score) => {
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
const findThreeVertical = (board, cols, rows, score) => {
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
const findThreeDiagonal = (board, cols, rows, score) => {
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

export const checkForThree = (board, cols, rows, newScore) => {
  newScore = findThreeHorizontal(board, cols, rows, newScore);
  newScore = findThreeVertical(board, cols, rows, newScore);
  newScore = findThreeDiagonal(board, cols, rows, newScore);
  return newScore;
};
