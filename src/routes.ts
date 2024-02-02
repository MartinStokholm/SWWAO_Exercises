import { Router } from "express";

const routes = Router();

// Catch all route for root
routes.get("/", (req, res) => {
  return res.send({ message: "Hello World from the root" });
});

routes.use("/orders");

export default routes;
