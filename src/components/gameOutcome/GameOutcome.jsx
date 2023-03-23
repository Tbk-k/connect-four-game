import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InnerWrapper } from "./GameOutcome.styles";
import { useReset } from "../../utils/useReset";
import { pauseTimer, unpauseTimer } from "../../features/timerSlice";
const GameOutcome = () => {
  const { winner } = useSelector((state) => state.gameScore);

  const resetGame = useReset();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pauseTimer());
    return () => {
      dispatch(unpauseTimer());
    };
  }, []);

  const content =
    winner === "draw" ? (
      <>
        <p></p>
        <p>tie</p>
      </>
    ) : (
      <>
        <p>{`player ${winner === "red" ? 1 : 2}`}</p>
        <p>wins</p>
      </>
    );

  return (
    <InnerWrapper>
      {content}
      <button onClick={resetGame}>play again</button>
    </InnerWrapper>
  );
};

export default GameOutcome;
