import { Router } from "express";

import User from "../controllers/users/users.controller";

import {
  validateUserCreate,
  userCreateSchema,
} from "../middlewares/validateUserCreate.middleware";

const routes = Router();

routes.post("", validateUserCreate(userCreateSchema), User.store);

export default routes;
