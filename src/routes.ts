import { Router } from "express";
import ordersController from "./controllers/ordersController";

const routes = Router();

// Catch all route for root
routes.get("/", (req, res) => {
  return res.send({ message: "Hello World from the root" });
});

routes.use("/orders", ordersController);

export default routes;
