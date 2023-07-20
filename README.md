# assignment
A basic REST API for a simple e-commerce application made using Node.js and Express. The API includes basic functionalities like listing products, creating a new product, updating a product, and deleting a product.

## Getting Started

### Prerequisites

To run this project, you need to have the following software installed:

- Node.js
- MongoDB (running instance or connection URI)

### Installation

1. Clone the repository:
```
git clone https://github.com/kunalarora0930/assignment.git
```
2. Install the dependencies:
```
cd assignment
npm install
```
3. Set up environment variables:

- Create a `.env` file in the project root directory.
- Define the required environment variables in the `.env` file (database connection URI).

4. Start the server:
```
npm start
```
The server will start running at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available

Product endpoints: `/api/products`
  - Get all products: `GET /api/products`
  - Get a single product: `GET /api/products/:id`
  - Create a new product: `POST /api/products`
  - Update a product: `PUT /api/products/:id`
  - Delete a product: `DELETE /api/products/:id`
