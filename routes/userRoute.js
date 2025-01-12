import { Router } from "express";
import { signUpUser, login } from "../controllers/authController.js";

const userRouter = Router();

userRouter.post("/signup", signUpUser);
userRouter.get("/login", login);

export default userRouter;
