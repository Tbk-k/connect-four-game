import React from "react";
import { StyledBtn, StyledNav } from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useReset } from "../../utils/useReset";

const Navbar = ({ isGame, setMenuState }) => {
  const handleMenu = () => {
    setMenuState(true);
  };
  const resetGame = useReset();
  return (
    <StyledNav isGame={isGame}>
      {isGame && <StyledBtn onClick={handleMenu}>menu</StyledBtn>}
      <Logo />
      {isGame && <StyledBtn onClick={resetGame}>restart</StyledBtn>}
    </StyledNav>
  );
};

export default Navbar;
