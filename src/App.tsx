import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import { Layout } from "./components/layout/Layout";
import { itemsServices } from "./services/itemsServices/itemsServices";
import { Products } from "./views/Products";
import { DetailedProduct } from "./views/DetailedProduct";
import { Checkout } from "./views/Checkout";

function App() {
  useEffect(() => {
    const localStorageCart = window.localStorage.getItem("cart");
    if (!localStorageCart) {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/products/*' element={<Products />} />
          <Route path='/products/product/:id' element={<DetailedProduct />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
