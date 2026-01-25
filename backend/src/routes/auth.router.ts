import { Router } from "express";
import { login } from "../controllers/auth/login.js";
import { register } from "../controllers/auth/register.js";

const AuthRouter = Router();

AuthRouter.post("/login", login).post("/register", register);

export { AuthRouter };
