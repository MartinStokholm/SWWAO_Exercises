import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  delivery: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    address: {
      street_name: {
        type: String,
        required: true,
      },
      street_number: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
