
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import "./styles/product.css";

function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation */}
      <nav>
        <Link to="/">Products</Link>
        <Link to="/add">Add Product</Link>
      </nav>

      {/* Main Content */}
      <div className="container">
        <Routes>
          {/* ✅ Product List opens first */}
          <Route path="/" element={<Home />} />

          {/* Other screens */}
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/view/:id" element={<ViewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
