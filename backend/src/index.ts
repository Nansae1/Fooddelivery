import express from "express";
import { connectToDatabase } from "./database/index.js";
import { FoodRouter } from "./routes/food.router.js";
import { CategoryRouter } from "./routes/category.router.js";
import cors from "cors";

await connectToDatabase();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/foods", FoodRouter);
app.use("/categories", CategoryRouter);

app.listen(4000, () => {
  console.log("Example app listening on port 4000");
});
