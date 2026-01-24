import { Router } from "express";
import { getCategories } from "../controllers/category/get-categories.js";
import { createCategory } from "../controllers/category/create-category.js";
import { deleteCategory } from "../controllers/category/delete-category.js";
import { login } from "../controllers/auth/login.js";
import { register } from "../controllers/auth/register.js";

const AuthRouter = Router();

AuthRouter.post("/login", login).post("/register", register);

export { AuthRouter };
