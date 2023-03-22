import React, { useEffect } from "react";
import { InnerWrapper, Wrapper } from "./Timer.styles";
import { ReactComponent as BackgroundRed } from "../../assets/img/turn-background-red.svg";
import { ReactComponent as BackgroundYellow } from "../../assets/img/turn-background-yellow.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateTime, setActivePlayer } from "../../features/timerSlice";

const Timer = () => {
  const { activePlayer, time } = useSelector((state) => state.timerSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    let intervalID;
    intervalID = setInterval(() => {
      dispatch(updateTime("red"));
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const Background = activePlayer === "red" ? BackgroundRed : BackgroundYellow;

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <h3>Player {activePlayer}'s turn</h3>
          <p>{time}s</p>
        </div>
        <Background />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Timer;
