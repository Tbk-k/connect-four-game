import React from "react";
import MainMenu from "./components/mainMenu/MainMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ingame from "./components/ingame/Ingame";
import Rules from "./components/rules/Rules";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <MainMenu /> },
    { path: "/game", element: <Ingame /> },
    { path: "/rules", element: <Rules /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
