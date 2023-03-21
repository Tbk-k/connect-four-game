import React from "react";
import { Wrapper } from "./Score.styles";
import { ReactComponent as PlayerOne } from "../../assets/img/player-one.svg";
import { ReactComponent as PlayerTwo } from "../../assets/img/player-two.svg";

const Score = ({ score: { red, yellow } }) => {
  return (
    <Wrapper>
      <div>
        <h3>player 1</h3>
        <p>{red}</p>
        <PlayerOne className="player-one" />
      </div>
      <div>
        <h3>player 2</h3>
        <p>{yellow}</p>
        <PlayerTwo className="player-two" />
      </div>
    </Wrapper>
  );
};

export default Score;
