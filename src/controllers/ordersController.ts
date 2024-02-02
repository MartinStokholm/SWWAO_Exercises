import SeedOrders from "../services/seedingService";
import OrderService from "../services/ordersServices";
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
    const orders = await OrderService.getAll();
    if (orders.length > 0) {
      res.status(200).json(orders);
    } else {
      res.status(200).json({ message: "No orders found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /orders
router.post("/", async (req, res) => {
  try {
    const newOrder = await OrderService.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /orders/:uid
router.get("/:uid", async (req, res) => {
  try {
    const order = await OrderService.getById(req.params.uid);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /orders/:uid
router.put("/:uid", async (req, res) => {
  try {
    const order = await OrderService.update(req.params.uid, req.body);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /orders/:uid
router.patch("/:uid", async (req, res) => {
  try {
    const order = await OrderService.update(req.params.uid, req.body);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /orders/:uid
router.delete("/:uid", async (req, res) => {
  try {
    const order = await OrderService.delete(req.params.uid);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
