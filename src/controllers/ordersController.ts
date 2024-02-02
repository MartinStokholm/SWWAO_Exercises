import SeedOrders from "../services/seedingService";
import express from "express";

const router = express.Router();

// POST FOR SEEDING ORDERS
router.post("/seed", async (_, res) => {
  try {
    const result = await SeedOrders();
    if (result) {
      res.status(201).json({ message: "Orders seeded" });
    } else {
      res.status(200).json({ message: "Orders already seeded" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /orders
router.get("/", async (req, res) => {
  try {
    // Fetch orders from your database here
    // const orders = await Orders.find();
    // Send the orders as a response
    // res.json(orders);
    res.status(200).json({ message: "TODO Implement GET /orders" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /orders
router.post("/", async (req, res) => {
  try {
    // Create a new order
    // const order = new Orders(req.body);
    // await order.save();
    // Send the order as a response
    // res.status(201).json(order);
    res.status(200).json({ message: "TODO Implement POST /orders" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /orders/:uid
router.get("/:uid", async (req, res) => {
  try {
    // Fetch order from your database here
    // const order = await Orders.findById(req.params.uid);
    // Send the order as a response
    // res.json(order);
    res.status(200).json({ message: "TODO Implement GET /orders/uid" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /orders/:uid
router.put("/:uid", async (req, res) => {
  try {
    // Update the order
    // const order = await Orders.findById(req.params.uid);
    // order.set(req.body);
    // await order.save();
    // Send the order as a response
    // res.json(order);
    res.status(200).json({ message: "TODO Implement PUT /orders/uid" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /orders/:uid
router.patch("/:uid", async (req, res) => {
  try {
    // Update the order
    // const order = await Orders.findById(req.params.uid);
    // order.set(req.body);
    // await order.save();
    // Send the order as a response
    // res.json(order);
    res.status(200).json({ message: "TODO Implement " });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /orders/:uid
router.delete("/:uid", async (req, res) => {
  try {
    // Delete the order
    // await Orders.deleteOne({ _id: req.params.uid });
    // Send a generic response
    // res.json({ message: "Order deleted" });
    res.status(200).json({ message: "TODO Implement" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
