import { createSlice } from "@reduxjs/toolkit";
import { checkForThree } from "../utils/checkForTheree";
import { checkForWin } from "../utils/checkForWin";

const initialState = {
  red: 0,
  yellow: 0,
  winner: "",
  winningSequence: null,
};

export const gameScore = createSlice({
  name: "gameScore",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      if (state.winner) return;
      let newScore = {
        ...state,
        red: 0,
        yellow: 0,
      };
      let board = action.payload;
      let cols = board.length;
      let rows = board[0].length;
      return checkForThree(board, cols, rows, newScore);
    },
    updateWinner: (state, action) => {
      let board = action.payload;
      let cols = board.length;
      let rows = board[0].length;
      let { winningSequence, winner } = checkForWin(board, cols, rows);
      state.winner = winner;
      state.winningSequence = winningSequence;
      if (!state.winner) {
        let boardNotFull = !board.flat().includes(null);
        if (boardNotFull) {
          if (state.red > state.yellow) {
            state.winner = "red";
          } else if (state.red < state.yellow) {
            state.winner = "red";
          } else {
            state.winner = "draw";
          }
        }
      }
    },
    resetScore: (state) => {
      return initialState;
    },
  },
});

export const { updateScore, resetScore, updateWinner } = gameScore.actions;
export default gameScore.reducer;
