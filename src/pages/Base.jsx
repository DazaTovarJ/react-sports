import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import {MainContextProvider} from "../context/MainContext";

function Base() {
  return (
    <MainContextProvider>
      <Toolbar />
      <Outlet />
      <Footer />
    </MainContextProvider>
  );
}

export default Base;
