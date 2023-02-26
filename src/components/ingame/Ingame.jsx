import React, { useState } from "react";
import { Wrapper } from "./Ingame.styles";
import Navbar from "../navbar/Navbar";
import IngameMenu from "../ingameMenu/IngameMenu";
const Ingame = () => {
  const [menuIsShown, setMenuState] = useState(false);
  return (
    <Wrapper>
      <Navbar isGame setMenuState={setMenuState} />
      {menuIsShown && <IngameMenu setMenuState={setMenuState} />}
    </Wrapper>
  );
};

export default Ingame;
