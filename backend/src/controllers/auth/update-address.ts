import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

export const updateAddress: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ message: "Address is required" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { address },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Address updated", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
