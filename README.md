# Apollonia Book Management 📚

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) ![Express](https://img.shields.io/badge/Express-4.x-black?logo=express) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green?logo=mongodb) ![Docker](https://img.shields.io/badge/Docker-20.x-blue?logo=docker) ![License](https://img.shields.io/badge/License-MIT-green)

Welcome to **Apollonia Book Management**! 🚀 This is a full-stack CRUD web application designed to manage books for Apollonia Library. Think of it as building a CMS for a library’s book catalog, with a clean web UI and a REST API backend. Whether you’re adding new books, updating details, or deleting old records, this app makes library management a breeze, all containerized with Docker for easy deployment.

## 📋 Project Overview
As a web dev, imagine you’re tasked with creating a backend API and a frontend dashboard for a library’s book inventory. This project does just that, answering questions like:
- 📖 Which books are in the library’s collection?
- ✍️ Who wrote a specific book?
- 🗑️ How do I remove outdated book records?
- ⚠️ Are there any data inconsistencies in the catalog?

The app combines a **Node.js + Express** backend with a **MongoDB** database and a simple HTML/CSS/JS frontend, all wrapped in a Dockerized environment for consistency.

## 🗃️ Database
The system uses **MongoDB** to store book data. The main collection is:
- **Books**: Stores book details (like `products` in an e-commerce DB). Fields:
  - `title`: Book title (e.g., "The Great Gatsby").
  - `author`: Author name (e.g., "F. Scott Fitzgerald").
  - `genre`: Book genre (e.g., "Novel").
  - `year`: Publication year (e.g., 1925).

📂 MongoDB is managed via **Mongoose** ODM, and the schema is defined in `backend/models/Book.js`.

## 🛠️ Environment Requirements
To run this project, you need:
- **Node.js**: 18.x or higher (for the backend) 🟢
- **MongoDB**: 6.x or higher (or use Docker) 🗄️
- **Docker**: 20.x or higher (for containerized deployment) 🐳
- **System**: Linux, macOS, or Windows (WSL works great) 💻
- **Dependencies** (in `backend/package.json`):
  - `express`: Backend framework, like Laravel for Node.js.
  - `mongoose`: MongoDB ODM, like Sequelize for SQL.
  - `cors`: For cross-origin requests, like middleware for APIs.
  - `dotenv`: For environment variables, like `.env` in Laravel.

## ⚙️ Setup Instructions
Follow these steps to get the project running, like setting up a Node.js app with Docker:

1. **Clone the Repository** 📥:
   ```bash
   git clone https://github.com/binhchay1/apollonia-book-management.git
   cd apollonia-book-management
   ```

2. **Start with Docker Compose** 🐳:
   Run the app with a single command to spin up MongoDB and the Node.js backend:
   ```bash
   docker-compose up
   ```
   This sets up:
   - MongoDB on `localhost:27017`.
   - Node.js backend on `localhost:5000`.

3. **Manual Setup (Optional)** 🛠️:
   If you don’t want to use Docker:
   - Install Node.js and MongoDB locally.
   - Install backend dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Start MongoDB server (`mongod`).
   - Start the backend:
     ```bash
     node app.js
     ```

4. **Configure Environment** 📋:
   - Copy `backend/.env.example` to `backend/.env`:
     ```bash
     cp backend/.env.example backend/.env
     ```
   - Update `.env` with MongoDB connection details:
     ```env
     MONGODB_URI=mongodb://localhost:27017/apollonia_library
     PORT=5000
     ```

## 🚀 How to Run
1. **Access the Frontend** 🌐:
   - Open `frontend/index.html` in your browser (e.g., `file://path/to/apollonia-book-management/frontend/index.html`).
   - Or serve it with a static server:
     ```bash
     npm install -g serve
     serve frontend
     ```

2. **Use the Web UI** ▶️:
   - Add a new book with title, author, genre, and year.
   - View the book list with details.
   - Edit or delete books as needed.

3. **Test the API** 🛠️:
   Use tools like Postman or curl to interact with the REST API (e.g., `http://localhost:5000/api/books`).

4. **Stop the Application** 🛑:
   - Stop Docker: `docker-compose down`.
   - Or stop the Node.js server: Ctrl+C.

## 📁 Project Structure
Like a typical full-stack Node.js app, here’s the layout:
```
apollonia-book-management/
├── backend/              # Backend code, like src/ in a Laravel app 🛠️
│   ├── models/          # Mongoose schemas, like database models 📊
│   │   └── Book.js
│   ├── routes/          # API routes, like Express routers 🚏
│   │   └── book.js
│   ├── app.js           # Main backend entry point
│   └── package.json     # Backend dependencies 📋
├── frontend/             # Frontend assets, like a React app’s src/ 🎨
│   ├── index.html       # Main UI page
│   ├── style.css        # Styling, like Tailwind CSS
│   └── script.js        # Frontend logic, like Vue.js
├── Dockerfile           # Docker config for the backend 🐳
├── docker-compose.yml   # Docker Compose setup for MongoDB + backend 📦
├── .gitignore           # Excludes node_modules/, etc. 🚫
├── README.md            # You're reading it! 📖
└── LICENSE              # MIT License 📜
```

## 📈 Key Features
- **CRUD Operations**: Create, read, update, and delete books via UI or API 📚
- **Book List Display**: View all books with title, author, genre, and year 🗂️
- **REST API**: Fully functional API for programmatic access (like a headless CMS) 🌐
- **Dockerized**: Consistent deployment across environments (like Kubernetes for small apps) 🐳
- **Simple UI**: Lightweight HTML/CSS/JS frontend for quick management 🎨

## 💡 API Endpoints
| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/books`          | Retrieve all books           |
| GET    | `/api/books/:id`      | Retrieve a book by ID        |
| POST   | `/api/books`          | Create a new book            |
| PUT    | `/api/books/:id`      | Update a book by ID          |
| DELETE | `/api/books/:id`      | Delete a book by ID          |

**Sample Book JSON**:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Novel",
  "year": 1925
}
```

## 🛠️ Troubleshooting
- **Error: `Cannot connect to MongoDB`** ⚠️: Check `MONGODB_URI` in `.env` and ensure MongoDB is running (`docker-compose up` or `mongod`).
- **API 404 Errors** 🚫: Verify the backend is running on `localhost:5000` (`node app.js` or Docker).
- **Frontend Not Loading** 🌐: Ensure `frontend/index.html` is served correctly (use `serve` or a web server).
- **Docker Issues** 🐳: Run `docker-compose logs` to debug or ensure ports `27017` and `5000` are free.

## 🤝 Contributing
Feel free to fork, submit PRs, or open issues! Treat it like contributing to an open-source Node.js package. 🌟

## 📜 License
MIT License (see `LICENSE`).

## 📞 Contact
Got questions? Reach out via [GitHub Issues](https://github.com/binhchay1/apollonia-book-management/issues).

## 💡 Future Improvements
Like scaling a web app, here are some ideas:
- **Categories**: Add book categories for better organization (like tags in a CMS) 🗂️
- **Search & Filter**: Implement search by title/author and filters by genre/year 🔍
- **Authentication**: Add user roles (admin, librarian) with JWT (like Laravel Sanctum) 🔒
- **Pagination**: Support large book collections with paginated API responses 📄
- **Modern UI**: Upgrade the frontend with Vue.js or React for a slicker UX 🎨
