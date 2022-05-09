import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";
import userListOneService from "../../services/users/userListOne.service";
import usersListService from "../../services/users/usersList.service";
import userUpdateOneService from "../../services/users/userUpdateOne.service";
import userDeleteService from "../../services/users/userDelete.service";

class UserController {
  static store = async (req: Request, res: Response) => {
    const { name, email, password, age } = req.newUser;
    const newUser = await userCreateService({ name, email, password, age });

    return res.status(201).send(newUser);
  };

  static index = async (req: Request, res: Response) => {
    const users = await usersListService();

    return res.status(200).send(users);
  };

  static show = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await userListOneService(id);

    return res.status(200).send(user);
  };

  static update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newValues = req.body;

    await userUpdateOneService(id, newValues);

    return res.status(200).json({
      message: "User updated",
    });
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    await userDeleteService(id);

    return res.status(200).json({
      message: "User deleted",
    });
  };
}

export default UserController;
