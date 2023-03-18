import React from "react";
import {Outlet} from "react-router-dom";
import Toolbar from "../components/Toolbar";
import {MainContextProvider} from "../context/MainContext";

function Base() {
  return (
    <MainContextProvider>
      <Toolbar />
      <Outlet />
    </MainContextProvider>
  );
}

export default Base;
