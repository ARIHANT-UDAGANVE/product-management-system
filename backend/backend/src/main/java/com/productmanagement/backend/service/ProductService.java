package com.productmanagement.backend.service;
import com.productmanagement.backend.model.Product;
import java.util.List;

public interface ProductService {

    Product saveProduct(Product product);
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product updateProduct(Long id, Product product);
    void deleteProduct(Long id);
}

