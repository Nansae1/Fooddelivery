import type { RequestHandler } from "express";
import type { UserModel } from "../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const token = authorization.split(" ")[1] as string;

  try {
    const { user } = jwt.verify(token, "Secret") as { user: { _id: string } };

    req.userId = user._id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
