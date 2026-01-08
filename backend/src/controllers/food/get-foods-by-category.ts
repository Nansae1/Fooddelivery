import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const getFoodsByCategory: RequestHandler = async (req, res) => {
  const { categoryId } = req.params;

  if (!categoryId) return "Failed";

  const foods = await FoodModel.find({
    categoryId: categoryId,
  }).populate("categoryId");
  const filteredFoods = foods.filter((food) =>
    food.categoryId.map((item) => item._id.toString()).includes(categoryId)
  );

  res.status(200).json(filteredFoods);
};
