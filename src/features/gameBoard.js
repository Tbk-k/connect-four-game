import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  board: Array.from({ length: 7 }, () => Array.from({ length: 6 }, () => null)),
};

export const gameBoard = createSlice({
  name: "gameBoard",
  initialState,
  reducers: {
    updateGameBoard: (state, action) => {
      let columnId = action.payload.columnId;
      let cellId = action.payload.cellId;
      let player = action.payload.activePlayer;
      state.board[columnId][cellId] = player;
      return state;
    },
    resetGameBoard: () => {
      return initialState;
    },
  },
});

export const { updateGameBoard, resetGameBoard } = gameBoard.actions;
export default gameBoard.reducer;
