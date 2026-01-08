import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";
import { CategoryModel } from "../../database/schema/category.schema.js";

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find({});

  res.status(201).json(categories);
};
