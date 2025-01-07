import express from "express";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use("/foods", foodRouter);
app.use("/users", userRouter);

export default app;
