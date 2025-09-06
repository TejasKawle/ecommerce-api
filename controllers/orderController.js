import Product from "../Model/Product.js";
import Order from "../Model/Order.js";

// place a new order

export const placeOrder = async (req, res) => {
  try {
    
    const { products } = req.body; // product: "id" quantity: 2
      if (!products || products.length === 0) {
        return res.status(400).json({ message: "No products in order" });
    }
    
    let totalPrice = 0;

    for (let item of products) {
      const dbProduct = await Product.findById(item.product);
        if (!dbProduct) {
          return res
            .status(404)
            .json({ message: `Product not found: ${item.product}` });
      }
      
      totalPrice += dbProduct.price * item.quantity;
    }
    const order = await Order.create({
      user: req.user._id,
      products,
      totalPrice,
    });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
      res.status(500).json({ message: "Error placing order", error });
  }
}


// Get logged-in user's orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "products.product",
      "name price"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

// Get all orders (Admin only)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "username email").populate("products.product", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = status || order.status;
    await order.save();

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error });
  }
};