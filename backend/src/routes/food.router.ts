import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { createFood } from "../controllers/food/create-food.js";
import { getFoodsByCategory } from "../controllers/food/get-foods-by-category.js";
import { updateFood } from "../controllers/food/update-foods.js";

const FoodRouter = Router();

FoodRouter.get("/", getFoods)
  .post("/", createFood)
  .get("/category/:categoryId", getFoodsByCategory)
  .put("/:id", updateFood);

export { FoodRouter };
