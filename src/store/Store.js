import { configureStore } from "@reduxjs/toolkit";
import activePlayer from "../features/activePlayer";
import gameBoard from "../features/gameBoard";
import gameScore from "../features/gameScore";
import timerSlice from "../features/timerSlice";

export const store = configureStore({
  reducer: {
    activePlayer,
    gameBoard,
    gameScore,
    timerSlice,
  },
});
