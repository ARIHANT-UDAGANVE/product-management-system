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

▶️ How to Run the Project Locally

1️⃣ Run Backend

mvn clean package

mvn spring-boot:run


Backend runs on:

http://localhost:9001


Test:

http://localhost:9001/api/products

2️⃣ Run Frontend

npm install

npm start


Frontend runs on:

http://localhost:3000

🔄 How Frontend and Backend Connect

React uses Axios to send HTTP requests

Backend exposes REST APIs

Data flows as JSON

CORS is enabled in backend

Example API call in React:

axios.get("http://localhost:9001/api/products");
