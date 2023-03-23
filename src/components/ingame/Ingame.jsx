import React, { useState } from "react";
import { Backdrop, Wrapper } from "./Ingame.styles";
import Navbar from "../navbar/Navbar";
import IngameMenu from "../ingameMenu/IngameMenu";
import Board from "../board/Board";
import { useSelector } from "react-redux";
import GameOutcome from "../gameOutcome/GameOutcome";

const Ingame = () => {
  const [menuIsShown, setMenuState] = useState(false);
  const { winner } = useSelector((state) => state.gameScore);

  return (
    <Wrapper>
      <Navbar isGame setMenuState={setMenuState} />
      <Board />
      {menuIsShown && (
        <Backdrop>
          <IngameMenu setMenuState={setMenuState} />
        </Backdrop>
      )}
      {winner && (
        <Backdrop>
          <GameOutcome />
        </Backdrop>
      )}
    </Wrapper>
  );
};

export default Ingame;
