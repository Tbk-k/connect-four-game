import React, { useState, useEffect } from "react";
import { InnerWrapper, Wrapper } from "./Timer.styles";
import { ReactComponent as BackgroundRed } from "../../assets/img/turn-background-red.svg";
import { ReactComponent as BackgroundYellow } from "../../assets/img/turn-background-yellow.svg";

const Timer = ({ activePlayer, setActivePlayer }) => {
  const [time, setTime] = useState(30);
  let intervalID;
  const switchPlayer = () => {
    setActivePlayer(activePlayer === 1 ? 2 : 1);
    setTime(30);
  };

  useEffect(() => {
    if (time === 0) {
      switchPlayer();
    }
  }, [time]);

  useEffect(() => {
    intervalID = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [activePlayer]);

  const Background = activePlayer === 1 ? BackgroundRed : BackgroundYellow;

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
