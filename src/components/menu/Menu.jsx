import React from "react";
import { Wrapper } from "./Menu.styles";
import Btn from "../btn/Btn";

const Menu = ({ children, isGame, btnParams, setMenuState, resetGame }) => {
  return (
    <Wrapper isGame={isGame}>
      {children}
      <div>
        {btnParams.map((props) => (
          <Btn
            key={props.id}
            {...props}
            isGame
            setMenuState={setMenuState}
            resetGame={resetGame}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Menu;
