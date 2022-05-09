import { Router } from "express";

import User from "../controllers/users/users.controller";

import {
  validateUserCreate,
  userCreateSchema,
} from "../middlewares/validateUserCreate.middleware";

const routes = Router();

routes.post("", validateUserCreate(userCreateSchema), User.store);

routes.get("", User.index);
routes.get("/:id", User.show);

routes.patch("/:id", User.update);

routes.delete("/:id", User.delete);

export default routes;
