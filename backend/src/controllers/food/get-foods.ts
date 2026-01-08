import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const getFoods: RequestHandler = async (_req, res) => {
  const foods = await FoodModel.find({}).populate("categoryId");
  res.status(200).json(foods);
};
