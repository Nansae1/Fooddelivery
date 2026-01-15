import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const updateFood: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const food = await FoodModel.findByIdAndUpdate(id, body, { new: true });

  if (!food) return res.status(404).json({ message: "Food not found" });

  return res.status(200).json(food);
};
