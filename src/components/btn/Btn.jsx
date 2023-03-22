import React from "react";
import { useNavigate } from "react-router-dom";
import { useReset } from "../../utils/useReset";
import { StyledBtn } from "./Btn.styles";

const Btn = ({
  id,
  text,
  backgroundColor = "white",
  image = null,
  color = "black",
  isGame,
  setMenuState,
}) => {
  const navigate = useNavigate();
  const resetGame = useReset();
  const buttonFunctions = {
    0: () => {
      resetGame();
      navigate("/game");
    },
    1: () => {
      resetGame();
      navigate("/game");
    },
    2: () => navigate("/rules"),
    3: () => setMenuState(false),
    4: () => {
      resetGame();
      setMenuState(false);
    },
    5: () => navigate("/"),
  };

  const handleClick = () => {
    buttonFunctions[id]();
  };

  return (
    <StyledBtn
      backgroundColor={backgroundColor}
      color={color}
      onClick={handleClick}
      isGame={isGame}
      image={image}
    >
      {text}
      {image && image}
    </StyledBtn>
  );
};

export default Btn;
