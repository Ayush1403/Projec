Project Documentation
Overview
This project is a backend application built with Node.js, Express, and MongoDB. It includes user registration, login, and profile management functionalities. The project uses JWT for authentication and bcrypt for password hashing.

Project Structure
Files and Directories
user.con.js
This file contains the controller functions for user-related operations such as registration, login, and profile retrieval.

db/db.js
This file contains the database connection logic using Mongoose.

middleware/user.auth.mid.js
This file contains the middleware for user authentication.

user.model.js
This file defines the user schema and model using Mongoose. It includes methods for generating authentication tokens, comparing passwords, and hashing passwords.

user.route.js
This file defines the routes for user-related operations and applies validation and authentication middleware.

user.service.js
This file contains service functions for creating users and hashing passwords.

.env
This file contains environment variables such as the database connection string and JWT secret.

app.js
This file sets up the Express application, connects to the database, and defines middleware and routes.

server.js
This file starts the HTTP server.

Installation and Setup
Clone the repository:

Install dependencies:

Create a .env file in the root directory and add the following environment variables:

Start the server:

API Endpoints
User Registration
URL: /user/register
Method: POST
Request Body:
Response:
User Login
URL: /user/login
Method: POST
Request Body:
Response:
Get User Profile
URL: /user/profile
Method: GET
Headers:
Response:
Middleware
Authentication Middleware
File: middleware/user.auth.mid.js
Function: authUser
Description: This middleware checks if the request has a valid JWT token and attaches the user to the request object.
Models
User Model
File: user.model.js

Schema:

Methods:

generateAuthToken: Generates a JWT token for the user.
comparePassword: Compares a given password with the hashed password.
hashPassword: Hashes the user's password before saving.
Services
User Service
File: user.service.js
Functions:
createUser: Creates a new user in the database.
hashPassword: Hashes a given password using bcrypt.
Controllers
User Controller
File: user.con.js
Functions:
registerUser: Handles user registration.
loginUser: Handles user login.
getProfile: Retrieves the authenticated user's profile.
Routes
User Routes
File: user.route.js
Endpoints:
POST /register: Registers a new user.
POST /login: Logs in a user.
GET /profile: Retrieves the authenticated user's profile.
Database Connection
DB Connection
File: db/db.js
Description: Connects to the MongoDB database using Mongoose.
Environment Variables
DB_CONNECT: MongoDB connection string.
JWT_SECRET: Secret key for JWT.
PORT: Port number for the server.
Running the Project
Ensure MongoDB is running.
Start the server:
Use a tool like Postman to test the API endpoints.
This documentation provides an overview of the project structure, installation, setup, and usage. It should help you understand and work with the project effectively.