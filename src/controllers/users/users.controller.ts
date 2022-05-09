import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";
import userListOneService from "../../services/users/userListOne.service";
import usersListService from "../../services/users/usersList.service";
import userUpdateOneService from "../../services/users/userUpdateOne.service";
import userDeleteService from "../../services/users/userDelete.service";

class UserController {
  static store = async (req: Request, res: Response) => {
    try {
      const { name, email, password, age } = req.newUser;
      const newUser = await userCreateService({ name, email, password, age });

      return res.status(201).send(newUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  static index = async (req: Request, res: Response) => {
    try {
      const users = await usersListService();

      return res.status(200).send(users);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  static show = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await userListOneService(id);

      return res.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  static update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newValues = req.body;

    try {
      await userUpdateOneService(id, newValues);

      return res.status(200).json({
        message: "User updated",
      });
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
    }
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await userDeleteService(id);

      return res.status(200).json({
        message: "User deleted",
      });
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
    }
  };
}

export default UserController;
