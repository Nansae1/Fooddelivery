import { Router } from "express";
import { getCategories } from "../controllers/category/get-categories.js";
import { createCategory } from "../controllers/category/create-category.js";
import { deleteCategory } from "../controllers/category/delete-category.js";

const CategoryRouter = Router();

CategoryRouter.get("/", getCategories)
  .post("/create", createCategory)
  .delete("/delete/:id", deleteCategory);

export { CategoryRouter };
