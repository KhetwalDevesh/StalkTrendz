import React from 'react';
import shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Header from './components/Header';
import './css/index.css';
import ProductDetails from './components/ProductDetails';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
