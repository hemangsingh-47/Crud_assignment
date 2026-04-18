# Notes API - CRUD Assignment

A robust RESTful API built with Node.js, Express, and MongoDB for managing notes. This project demonstrates full CRUD operations, including bulk creation and deletion, with strict input validation and clean architecture.

## 🚀 Live Documentation

- **Postman Documentation**: [View API Docs](https://documenter.getpostman.com/view/50840788/2sBXqDsNvs)
- **GitHub Repository**: [View Source Code](https://github.com/hemangsingh-47/Crud_assignment)
 **Api_live**:https://crud-assignment-3tk0.onrender.com/api/notes
## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv for configuration
- **Development**: nodemon for auto-reloading

## 📋 API Endpoints

### Notes Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/notes` | Create a single note |
| **POST** | `/api/notes/bulk` | Create multiple notes at once |
| **GET** | `/api/notes` | Fetch all notes from the database |
| **GET** | `/api/notes/:id` | Fetch a single note by its ID |
| **PUT** | `/api/notes/:id` | Completely replace a note |
| **PATCH** | `/api/notes/:id` | Update specific fields of a note |
| **DELETE** | `/api/notes/bulk` | Delete multiple notes using an array of IDs |
| **DELETE** | `/api/notes/:id` | Delete a single note by ID |

> [!IMPORTANT]
> The Bulk Delete endpoint is ordered before the Single Delete to avoid route shadowing issues.

## ⚙️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hemangsingh-47/Crud_assignment.git
   cd Crud_assignment/my_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file in the `my_app` directory and add your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the server**:
   ```bash
   # For development
   npm run server

   # For production
   npm start
   ```

## 🛡️ Input Validation

The API performs strict validation on all requests:
- **ID Validation**: Ensures that all provided IDs are valid 24-character MongoDB ObjectIds.
- **Required Fields**: Checks for mandatory `title` and `content` fields during creation.
- **Empty Arrays**: Prevents empty bulk operations.

---
Developed as part of the CRUD Backend Assignment.
