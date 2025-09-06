import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from './routes/orderRoutes.js'
import { connectDB } from "./config/connectDB.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("E-commerce API is running ");
});
app.listen(3000, () => {
  console.log('server is running on port 3000');
  
})



