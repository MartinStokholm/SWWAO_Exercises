import Order from "../models/orders";

const OrderService = {
  getAll: async (filter = {}) => {
    return await Order.find(filter, { __v: 0 }).lean();
  },

  getById: async (uid: string) => {
    return await Order.findById(uid);
  },

  create: async (order: typeof Order) => {
    return await Order.create(order);
  },

  update: async (uid: string, order: typeof Order) => {
    return await Order.findByIdAndUpdate(uid, order, { new: true });
  },

  delete: async (uid: string) => {
    return await Order.deleteOne({ _id: uid });
  },

  insertMany: async (orders: (typeof Order)[]) => {
    return await Order.insertMany(orders);
  },
};

export default OrderService;
