import { Router } from "express";
import { login } from "../controllers/auth/login.js";
import { register } from "../controllers/auth/register.js";
import { getMe } from "../controllers/auth/get-me.js";
import { updateAddress } from "../controllers/auth/update-address.js";

const AuthRouter = Router();

AuthRouter.post("/login", login)
  .post("/register", register)
  .get("/me", getMe)
  .put("/address", updateAddress);

export { AuthRouter };
