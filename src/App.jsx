import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import Base from "./pages/Base";
import Overview from "./pages/Overview";
import Content from "./pages/Content";
import Create from "./pages/Create";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Overview />} />
          <Route path="content" element={<Content />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
