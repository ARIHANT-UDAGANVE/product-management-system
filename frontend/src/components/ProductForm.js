import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

function ProductForm() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      ProductService.getProductById(id)
        .then(response => {
          setProduct(response.data);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const saveOrUpdateProduct = (e) => {
    e.preventDefault();

    if (id) {
      ProductService.updateProduct(id, product)
        .then(() => {
          alert("Product updated successfully");
          navigate("/");
        });
    } else {
      ProductService.createProduct(product)
        .then(() => {
          alert("Product added successfully");
          navigate("/");
        });
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Product" : "Add Product"}</h2>

      <form onSubmit={saveOrUpdateProduct}>
        <input name="name" placeholder="Name" value={product.name} onChange={handleChange} />
        <input name="price" placeholder="Price" value={product.price} onChange={handleChange} />
        <input name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} />
        <input name="description" placeholder="Description" value={product.description} onChange={handleChange} />

        <button className="btn-save" type="submit">
          {id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
