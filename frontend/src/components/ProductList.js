import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";

function ProductList() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = () => {
    ProductService.getAllProducts()
      .then(response => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      ProductService.deleteProduct(id)
        .then(() => {
          alert("Product deleted successfully");
          loadProducts();
        });
    }
  };

  return (
    <div>
      <h2>Product List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn-view" onClick={() => navigate(`/view/${product.id}`)}>View</button>
                <button className="btn-edit" onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
