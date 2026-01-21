import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const deleteFood: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const food = await FoodModel.findByIdAndDelete(req.params.id);
  res.status(201).json(food);
};
