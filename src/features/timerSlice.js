import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePlayer: "red",
  time: 30,
  paused: false,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTime: (state) => {
      if (state.time === 0) {
        state.activePlayer = state.activePlayer === "red" ? "yellow" : "red";
        state.time = 30;
      } else if (!state.paused) {
        state.time--;
      }
    },
    setActivePlayer: (state, action) => {
      state.activePlayer = action.payload;
    },
    resetTimer: (state, action) => {
      state.activePlayer = action.payload;
      state.time = 30;
      state.paused = false;
    },
    pauseTimer: (state) => {
      state.paused = true;
    },
    unpauseTimer: (state) => {
      state.paused = false;
    },
  },
});

export const {
  updateTime,
  setActivePlayer,
  resetTimer,
  pauseTimer,
  unpauseTimer,
} = timerSlice.actions;

export default timerSlice.reducer;
