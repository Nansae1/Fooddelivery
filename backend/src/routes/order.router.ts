import { Router } from "express";
import { getUserOrder } from "../controllers/order/get-user-orders.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createOrder } from "../controllers/order/create-order.js";

const OrderRouter = Router();

OrderRouter.get("/", authMiddleware, getUserOrder).post(
  "/create",
  authMiddleware,
  createOrder,
);

export { OrderRouter };
