# Backend Application

This is a backend application built with Node.js, Express, and MongoDB. It includes features like user registration, login, and profile management. The project uses JWT for authentication and bcrypt for password hashing.

---

## Project Structure

### Files and Directories

- **`controllers/user.con.js`**: Contains controller functions for user operations such as registration, login, and profile retrieval.
- **`db/db.js`**: Handles the database connection using Mongoose.
- **`middleware/user.auth.mid.js`**: Middleware for user authentication.
- **`models/user.model.js`**: Defines the user schema and model with methods for token generation, password comparison, and hashing.
- **`routes/user.route.js`**: Defines routes for user-related operations and applies validation and authentication middleware.
- **`services/user.service.js`**: Contains service functions for user creation and password hashing.
- **`.env`**: Stores environment variables like the database connection string and JWT secret.
- **`app.js`**: Sets up the Express application, connects to the database, and configures middleware and routes.
- **`server.js`**: Starts the HTTP server.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DB_CONNECT=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=<port-number>
```

### 4. Start the Server
```bash
npm start
```

---

## API Endpoints

### User Registration
- **URL**: `/user/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt-token>",
    "user": {
      "_id": "<user-id>",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com"
    }
  }
  ```

### User Login
- **URL**: `/user/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt-token>",
    "user": {
      "_id": "<user-id>",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com"
    }
  }
  ```

### Get User Profile
- **URL**: `/user/profile`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "<user-id>",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com"
  }
  ```

---

## Middleware

### Authentication Middleware
- **File**: `middleware/user.auth.mid.js`
- **Function**: `authUser`
- **Description**: Checks for a valid JWT token in the request header and attaches the user to the request object.

---

## Models

### User Model
- **File**: `models/user.model.js`
- **Schema**:
  ```javascript
  fullname: {
    firstname: { type: String, required: true, minLength: 3 },
    lastname: { type: String, minLength: 3 }
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }
  ```

- **Methods**:
  - `generateAuthToken`: Generates a JWT token for the user.
  - `comparePassword`: Compares a given password with the hashed password.
  - `hashPassword`: Hashes the user's password before saving.

---

## Services

### User Service
- **File**: `services/user.service.js`
- **Functions**:
  - `createUser`: Creates a new user in the database.
  - `hashPassword`: Hashes a given password using bcrypt.

---

## Controllers

### User Controller
- **File**: `controllers/user.con.js`
- **Functions**:
  - `registerUser`: Handles user registration.
  - `loginUser`: Handles user login.
  - `getProfile`: Retrieves the authenticated user's profile.

---

## Routes

### User Routes
- **File**: `routes/user.route.js`
- **Endpoints**:
  - `POST /register`: Registers a new user.
  - `POST /login`: Logs in a user.
  - `GET /profile`: Retrieves the authenticated user's profile.

---

## Database Connection

### DB Connection
- **File**: `db/db.js`
- **Description**: Connects to the MongoDB database using Mongoose.

---

## Environment Variables

- `DB_CONNECT`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT.
- `PORT`: Port number for the server.

---

## Running the Project

1. Ensure MongoDB is running.
2. Start the server:
   ```bash
   npm start
   ```
3. Use a tool like Postman to test the API endpoints.

---

This documentation provides an overview of the project structure, installation, setup, and usage. It should help you understand and work with the project effectively.
