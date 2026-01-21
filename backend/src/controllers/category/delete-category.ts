import type { RequestHandler } from "express";
import { CategoryModel } from "../../database/schema/category.schema.js";

export const deleteCategory: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const categories = await CategoryModel.findByIdAndDelete(req.params.id);
  res.status(201).json(categories);
};
