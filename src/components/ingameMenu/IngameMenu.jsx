import React from "react";
import Menu from "../menu/Menu";
import { Wrapper } from "./IngameMenu.styles";
import { useTheme } from "styled-components";

const IngameMenu = ({ setMenuState }) => {
  const theme = useTheme();
  const btns = [
    {
      id: 3,
      text: "Continue Game",
      backgroundColor: "", // Background color of the button
      image: null, // Image to display on the button
      color: "", // Text color of the button
    },
    {
      id: 4,
      text: "Restart Game",
      backgroundColor: "",
      image: null,
      color: "",
    },
    {
      id: 5,
      text: "Quit Game",
      backgroundColor: theme.colors.red, // Use theme color for background
      image: null,
      color: theme.colors.white, // Use theme color for text
    },
  ];

  return (
    <Wrapper>
      <Menu isGame btnParams={btns} setMenuState={setMenuState}>
        <h2>pause</h2>
      </Menu>
    </Wrapper>
  );
};

export default IngameMenu;
