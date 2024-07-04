# Electricity Providers Management System

## Overview

The Electricity Providers Management System is a web application designed to manage information about electricity providers. It allows users to perform CRUD (Create, Read, Update, Delete) operations on provider data, including their name, operating country, market share, renewable energy percentage, and yearly revenue.

## Features

- **Backend (Node.js/Express):**
  - RESTful API endpoints for CRUD operations
  - MongoDB for storing provider data
  - Input validation and error handling

- **Frontend (React):**
  - Forms for adding and editing providers
  - User interface for interacting with CRUD operations
  - Display list of providers with view, edit, and delete options
  - User-friendly feedback for successful operations and error messages

- **Optional Features:**
  - Authentication for securing the application
  - Search and filter capabilities
  - Charts and graphs for visual representation of data

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

### Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/electricity-providers.git
   cd electricity-providers
   ```

2. **Backend Setup:**
   - Navigate to the backend directory:
     ```sh
     cd backend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Create a `.env` file in the backend directory with the following content:
     ```
     MONGODB_URI=mongodb://localhost:27017/electricity_providers
     PORT=4000
     ```
   - Start the backend server:
     ```sh
     npm start
     ```

3. **Frontend Setup:**
   - Navigate to the frontend directory:
     ```sh
     cd frontend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the frontend development server:
     ```sh
     npm start
     ```

4. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:3000`.

### API Endpoints

- **GET /providers:** Retrieve all providers.
- **GET /providers/:id:** Retrieve a provider by ID.
- **POST /providers:** Create a new provider.
- **PUT /providers/:id:** Update a provider by ID.
- **DELETE /providers/:id:** Delete a provider by ID.

### Frontend Routes

- **/**: Home page displaying the list of providers.
- **/add:** Form for adding a new provider.
- **/edit/:id:** Form for editing an existing provider.

## Project Structure

- **backend:** Contains the Node.js/Express server and MongoDB setup.
- **frontend:** Contains the React application.
- **styles:** Contains CSS files for styling the application.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React, React Router, Toastify
- **Styling:** CSS

## Contribution

1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```
3. **Make your changes and commit them:**
   ```sh
   git commit -m 'Add some feature'
   ```
4. **Push to the branch:**
   ```sh
   git push origin feature-branch
   ```
5. **Submit a pull request.**

## License

This project is licensed under the MIT License.

---

For any further assistance or questions, please contact the development team or refer to the documentation. Happy coding!
