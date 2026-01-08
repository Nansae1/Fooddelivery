import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { createFood } from "../controllers/food/create-food.js";
import { getFoodsByCategory } from "../controllers/food/get-foods-by-category.js";

const FoodRouter = Router();

FoodRouter.get("/", getFoods)
  .post("/", createFood)
  .get("/category/:categoryId", getFoodsByCategory);

export { FoodRouter };
