import { configureStore } from "@reduxjs/toolkit";
import gameBoard from "../features/gameBoard";
import gameScore from "../features/gameScore";
import timerSlice from "../features/timerSlice";

export const store = configureStore({
  reducer: {
    gameBoard,
    gameScore,
    timerSlice,
  },
});
