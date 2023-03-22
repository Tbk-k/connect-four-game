import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePlayer: "red",
  time: 30,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTime: (state) => {
      if (state.time === 0) {
        state.activePlayer = state.activePlayer === "red" ? "yellow" : "red";
        state.time = 30;
      } else {
        state.time--;
      }
    },
    setActivePlayer: (state, action) => {
      state.activePlayer = action.payload;
    },
    resetTimer: (state, action) => {
      return {
        activePlayer: action.payload,
        time: 30,
      };
    },
  },
});

export const { updateTime, setActivePlayer, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
