import express from "express";
const router = express.Router();

// GET /orders
router.get("/orders", async (req, res) => {
  try {
    // Fetch orders from your database here
    // const orders = await Orders.find();
    // Send the orders as a response
    // res.json(orders);
    res.status(200).json({ message: "TODO Implement" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /orders
router.post("/orders", async (req, res) => {
  try {
    // Create a new order
    // const order = new Orders(req.body);
    // await order.save();
    // Send the order as a response
    // res.status(201).json(order);
    res.status(200).json({ message: "TODO Implement" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /orders/:uid
router.get("/orders/:uid", async (req, res) => {
  try {
    // Fetch order from your database here
    // const order = await Orders.findById(req.params.uid);
    // Send the order as a response
    // res.json(order);
    res.status(200).json({ message: "TODO Implement" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /orders/:uid
router.put("/orders/:uid", async (req, res) => {
  try {
    // Update the order
    // const order = await Orders.findById(req.params.uid);
    // order.set(req.body);
    // await order.save();
    // Send the order as a response
    // res.json(order);
    res.status(200).json({ message: "TODO Implement" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /orders/:uid
router.patch("/orders/:uid", async (req, res) => {
  try {
    // Update the order
    // const order = await Orders.findById(req.params.uid);
    // order.set(req.body);
    // await order.save();
    // Send the order as a response
    // res.json(order);
    res.status(200).json({ message: "TODO Implement" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /orders/:uid
router.delete("/orders/:uid", async (req, res) => {
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
