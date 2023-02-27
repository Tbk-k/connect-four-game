import React, { useState } from "react";
import { Wrapper } from "./Ingame.styles";
import Navbar from "../navbar/Navbar";
import IngameMenu from "../ingameMenu/IngameMenu";
import Board from "../board/Board";
const Ingame = () => {
  const [menuIsShown, setMenuState] = useState(false);
  return (
    <Wrapper>
      <Navbar isGame setMenuState={setMenuState} />
      <Board/>
      {menuIsShown && <IngameMenu setMenuState={setMenuState} />}
    </Wrapper>
  );
};

export default Ingame;
