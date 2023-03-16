import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import Base from "./pages/Base";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Base />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
