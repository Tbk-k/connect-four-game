import { createSlice } from "@reduxjs/toolkit";

const initialState = "red";

export const activePlayer = createSlice({
  name: "activePlayer",
  initialState,
  reducers: {
    updateActivePlayer: (state) => {
      return state === "red" ? "yellow" : "red";
    },
    resetPlayer: (state) => {
      return "red";
    },
  },
});

export const { updateActivePlayer, resetPlayer } = activePlayer.actions;
export default activePlayer.reducer;
