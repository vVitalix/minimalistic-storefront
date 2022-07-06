import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//COMPONENTS
import Main from "./layouts/Main";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<ProductList />} />
            <Route path="category/:categoryName" element={<ProductList />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
