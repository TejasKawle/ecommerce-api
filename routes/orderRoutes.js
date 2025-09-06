import express from "express";
import {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} from '../controllers/orderController.js'
import { authMiddleware, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// User routes
router.post("/", authMiddleware, placeOrder);
router.get("/my-orders", authMiddleware, getMyOrders);

// Admin routes
router.get("/", authMiddleware, adminOnly, getAllOrders);
router.put("/:id", authMiddleware, adminOnly, updateOrderStatus);

export default router;
