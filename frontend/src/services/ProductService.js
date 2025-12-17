import axios from "axios";

const API_URL = "http://localhost:9002/api/products";

class ProductService {

  getAllProducts() {
    return axios.get(API_URL);
  }

  getProductById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createProduct(product) {
    return axios.post(API_URL, product);
  }

  updateProduct(id, product) {
    return axios.put(`${API_URL}/${id}`, product);
  }

  deleteProduct(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

const productService = new ProductService();
export default productService;


