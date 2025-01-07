import { Router } from "express";

import { getUsers, postUser } from "../controllers/foodController.js";

const foodRouter = Router();

foodRouter.route("/").get(getUsers).post(postUser);

export default foodRouter;
