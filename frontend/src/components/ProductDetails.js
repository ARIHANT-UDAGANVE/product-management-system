import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    ProductService.getProductById(id)
      .then(response => {
        setProduct(response.data);
      });
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>

      <div className="details">
        <p><b>Name:</b> {product.name}</p>
        <p><b>Price:</b> {product.price}</p>
        <p><b>Quantity:</b> {product.quantity}</p>
        <p><b>Description:</b> {product.description}</p>
      </div>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default ProductDetails;
