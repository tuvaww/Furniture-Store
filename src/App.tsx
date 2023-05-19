import React from "react";
import logo from "./logo.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
