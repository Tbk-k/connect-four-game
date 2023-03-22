import { useDispatch } from "react-redux";
import { resetScore } from "../features/gameScore";
import { resetPlayer } from "../features/activePlayer";
import { resetGameBoard } from "../features/gameBoard";
import { resetTimer } from "../features/timerSlice";

export const useReset = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetScore());
    dispatch(resetGameBoard());
    dispatch(resetTimer("red"));
  };

  return handleReset;
};
