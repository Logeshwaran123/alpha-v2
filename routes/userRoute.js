import { Router } from "express";
import { signUp, login } from "../controllers/authController.js";

const userRouter = Router();

userRouter.post("/signup", signUp);
userRouter.get("/login", login);

export default userRouter;
