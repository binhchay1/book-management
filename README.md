# Book Management

A full-stack CRUD web application for managing books at Apollonia Library. This project allows you to create, read, update, and delete book records through a web interface and REST API backend.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)

---

## Features
- Create, Read, Update, Delete books
- Display list of books with details (Title, Author, Genre, Year)
- Web UI for easy book management
- REST API using Node.js + Express
- MongoDB database
- Dockerized for consistent deployment

---

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** HTML, CSS, JavaScript
- **Containerization:** Docker, Docker Compose

---

## Project Structure
apollonia-book-management/
│
├─ backend/
│ ├─ models/
│ │ └─ Book.js
│ ├─ routes/
│ │ └─ book.js
│ ├─ app.js
│ └─ package.json
│
├─ frontend/
│ ├─ index.html
│ ├─ style.css
│ └─ script.js
│
├─ Dockerfile
├─ docker-compose.yml
└─ README.md

yaml
Copy code

---

## Installation

1. Clone the repository:
bash
git clone <your-repo-url>
cd apollonia-book-management
Start the application using Docker Compose:

bash
Copy code
docker-compose up
This will run:
MongoDB on port 27017
Node.js backend on port 5000

---

## Usage
Open frontend/index.html in your browser.

Use the web UI to:
Add a new book (Title, Author, Genre, Year)
View all books in a list
Delete books

All operations are persisted in the MongoDB database.

---

## API Endpoints
Books
Method	Endpoint	Description
GET	/api/books	Retrieve all books
GET	/api/books/:id	Retrieve a book by ID
POST	/api/books	Create a new book
PUT	/api/books/:id	Update a book by ID
DELETE	/api/books/:id	Delete a book by ID

---

## Sample Book JSON
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Novel",
  "year": 1925
}

---
 
## Future Improvements

Add book categories and management
Implement search and filter functionality
User authentication and admin roles
Pagination and sorting for large book collections
Enhanced UI/UX with modern frontend frameworks

License
This project is open-source and available under the MIT License.
