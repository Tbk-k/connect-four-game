import React, { useState } from "react";
import MainMenu from "./components/mainMenu/MainMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ingame from "./components/ingame/Ingame";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <MainMenu /> },
    { path: "/game", element: <Ingame /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
