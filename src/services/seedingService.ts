import OrderService from "./ordersServices";
import { readFile } from "fs/promises";

const SeedOrders = async () => {
  const anyExistingOrders = await OrderService.getAll();
  if (anyExistingOrders.length > 0) {
    console.log("Orders already seeded");
    return false;
  }

  // Read the JSON file
  const data = await readFile("./MOCK_DATA_MATERIALS.json", "utf-8");

  // Parse the JSON data to JavaScript objects
  const orders = JSON.parse(data);

  // Iterate over the orders and save each one to the database

  OrderService.insertMany(orders);
  return true;
};

export default SeedOrders;
