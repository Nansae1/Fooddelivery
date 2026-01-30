import { model, Schema } from "mongoose";
import { ref } from "node:process";

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    status: { type: String, required: true, default: "pending" },
    address: { type: String, required: true, default: "Sbd negdsen emneleg" },
  },
  { timestamps: true },
);

export const OrderModel = model("Order", orderSchema);
