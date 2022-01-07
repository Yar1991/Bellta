import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Home from "./components/home/Home";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
