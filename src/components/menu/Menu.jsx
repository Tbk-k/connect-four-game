import React from "react";
import { Wrapper } from "./Menu.styles";
import Btn from "../btn/Btn";

const Menu = ({ children, isGame, btnParams, setMenuState }) => {
  return (
    <Wrapper isGame={isGame}>
      {children}
      <div>
        {btnParams.map((props) => (
          <Btn key={props.id} {...props} isGame setMenuState={setMenuState} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Menu;
