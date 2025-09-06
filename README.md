# 🛒 E-commerce Backend API

A complete backend for an e-commerce application built with **Node.js, Express, and MongoDB**.  
It supports **JWT authentication, role-based access control, product management, and order management**.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User signup/login with **JWT**.
- Role-based access control (user/admin).
- Secure routes with middleware.

### 📦 Product Management
- CRUD operations on products.
- Search by name, filter by category/price.
- Pagination support for listing products.
- Admin-only create, update, and delete.

### 🛍️ Orders
- Users can place orders with multiple products.
- Users can view their own orders.
- Admins can view all orders.
- Admins can update order status (Pending → Shipped → Delivered).

---

## ⚙️ Tech Stack
- **Node.js** + **Express** – Backend framework
- **MongoDB** + **Mongoose** – Database & ODM
- **JWT (jsonwebtoken)** – Authentication
- **bcryptjs** – Password hashing
- **dotenv** – Environment configuration

---

## 📂 Project Structure
```
ecom-api/
│── Model/           # Mongoose models (User, Product, Order)
│── Controller/      # Route handlers
│── Routes/          # Express routes
│── Middleware/      # Authentication & Authorization middleware
│── server.js        # App entry point
│── .env             # Environment variables
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/ecom-api.git
cd ecom-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb+srv://<your-db-url>
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm run dev
```

---

## 📌 API Endpoints

### Auth
- `POST /api/auth/signup` → Register a user
- `POST /api/auth/login` → Login & get JWT

### Products
- `POST /api/products` (admin) → Create product
- `GET /api/products` → Get all products (search, filter, pagination)
- `GET /api/products/:id` → Get single product
- `PUT /api/products/:id` (admin) → Update product
- `DELETE /api/products/:id` (admin) → Delete product

### Orders
- `POST /api/orders` (user) → Place order
- `GET /api/orders/my-orders` (user) → Get logged-in user’s orders
- `GET /api/orders` (admin) → Get all orders
- `PUT /api/orders/:id` (admin) → Update order status

---

## 🧪 Sample JSON

### Signup
```json
{
  "username": "ashu",
  "email": "ashu@example.com",
  "password": "123456"
}
```

### Login
```json
{
  "email": "ashu@example.com",
  "password": "123456"
}
```

### Create Product (Admin)
```json
{
  "name": "MacBook Pro",
  "description": "Apple M3 Pro laptop",
  "price": 2500,
  "category": "electronics",
  "stock": 15
}
```

### Place Order (User)
```json
{
  "products": [
    { "product": "PRODUCT_ID_HERE", "quantity": 2 },
    { "product": "ANOTHER_PRODUCT_ID", "quantity": 1 }
  ]
}
```

---

## 🛠️ Future Improvements
- Add product reviews & ratings.
- Payment integration (Stripe/PayPal Sandbox).
- File uploads for product images.
- Email notifications on order confirmation.

---

## 📜 License
This project is licensed under the MIT License.
