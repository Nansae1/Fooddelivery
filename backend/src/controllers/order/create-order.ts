import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

export const createOrder: RequestHandler = async (req, res) => {
  const body = req.body;
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const order = await OrderModel.create({ ...body, userId });

  res.status(201).json(order);
};
