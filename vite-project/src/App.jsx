import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import OrderPage from "./components/OrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
