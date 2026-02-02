import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

export const getUserOrder: RequestHandler = async (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const orders = await OrderModel.find({ userId })
    .populate("orderItems.foodId")
    .populate("userId");

  res.status(200).json(orders);
};
