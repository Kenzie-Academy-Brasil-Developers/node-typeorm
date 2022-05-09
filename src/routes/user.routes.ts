import { Router } from "express";

import UserController from "../controllers/users/users.controller";

import {
  validateUserCreate,
  userCreateSchema,
} from "../middlewares/validateUserCreate.middleware";

const routes = Router();

routes.post("", validateUserCreate(userCreateSchema), UserController.store);

routes.get("", UserController.index);
routes.get("/:id", UserController.show);

routes.patch("/:id", UserController.update);

routes.delete("/:id", UserController.delete);

export default routes;
