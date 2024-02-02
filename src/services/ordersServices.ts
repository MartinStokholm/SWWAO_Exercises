import Order from "../models/orders";

const orderService = {
  getAll: async () => {
    return await Order.find();
  },

  getById: async (uid: number) => {
    return await Order.findById(uid);
  },

  create: async (order: typeof Order) => {
    return await Order.create(order);
  },

  update: async (uid: number, order: typeof Order) => {
    return await Order.findByIdAndUpdate(uid, order, { new: true });
  },

  delete: async (uid: number) => {
    return await Order.deleteOne({ _id: uid });
  },
};

export default orderService;
