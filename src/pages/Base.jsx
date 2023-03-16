import React from "react";
import {Outlet} from "react-router-dom";
import Toolbar from "../components/Toolbar";

function Base() {
  return (
    <>
      <Toolbar />
      <Outlet />
    </>
  );
}

export default Base;
