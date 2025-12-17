📦 Product Management System (Full Stack)

This is a full-stack Product Management web application built using:

Frontend: React + Axios + React Router DOM

Backend: Spring Boot + Spring Data JPA

Database: MySQL / PostgreSQL (initially H2 for development)

The application allows users to add, view, update, and delete products.

✨ Features

Add a new product

View all products

View product details

Edit existing product

Delete product

REST API based architecture

Clean separation of frontend and backend

🛠️ Tech Stack
Frontend

React

Axios

React Router DOM

HTML, CSS

Backend

Java 8+

Spring Boot

Spring Web

Spring Data JPA

Hibernate

Database

H2 (for development)

MySQL / PostgreSQL (for production)

📁 Project Structure

Backend (Spring Boot)

src/main/java/com/productmanagement/backend
│
├── BackendApplication.java
│
├── controller

│   └── ProductController.java
│
├── service

│   ├── ProductService.java

│   └── ProductServiceImpl.java
│
├── repository

│   └── ProductRepository.java
│
├── model

│   └── Product.java
│
└── exception

    ├── ResourceNotFoundException.java
    
    └── GlobalExceptionHandler.java
