import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

export const updateOrder: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const order = await OrderModel.findByIdAndUpdate(id, body, { new: true });

  if (!order) return res.status(404).json({ message: "Order not found" });

  return res.status(200).json(order);
};
