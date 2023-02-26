import React from "react";
import Btn from "../btn/Btn";
import { ReactComponent as PvP } from "../../assets/img/player-vs-player.svg";
import { ReactComponent as PvC } from "../../assets/img/player-vs-cpu.svg";
import { Wrapper, InnerWrapper } from "./MainMenu.styles";
import { useTheme } from "styled-components";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";

const MainMenu = () => {
  const theme = useTheme();
  const btns = [
    {
      id: 0,
      text: "Play vs CPU",
      backgroundColor: theme.colors.red,
      image: <PvC />,
      color: theme.colors.white,
    },
    {
      id: 1,
      text: "Play vs Player",
      backgroundColor: theme.colors.yellow,
      image: <PvP />,
      color: "",
    },
    {
      id: 2,
      text: "Game Rules",
      backgroundColor: "",
      image: null,
      color: "",
    },
  ];

  return (
    <Wrapper>
      <Menu btnParams={btns}>
        <Navbar />
      </Menu>
    </Wrapper>
  );
};

export default MainMenu;
