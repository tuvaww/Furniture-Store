import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import { Layout } from "./components/layout/Layout";
import { itemsServices } from "./services/itemsServices/itemsServices";
import { Products } from "./views/Products";

function App() {
  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    await itemsServices.getAllItems();
    await itemsServices.getItemById("1");
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/products/*' element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
