import React from "react";
import { StyledBtn, StyledNav } from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const Navbar = ({ isGame, setMenuState }) => {
  const handleClick = () => {
    setMenuState(true);
  };

  return (
    <StyledNav isGame={isGame}>
      {isGame && <StyledBtn onClick={handleClick}>menu</StyledBtn>}
      <Logo />
      {isGame && <StyledBtn>restart</StyledBtn>}
    </StyledNav>
  );
};

export default Navbar;
