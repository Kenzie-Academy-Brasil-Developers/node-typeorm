import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

class User {
  static store = async (req: Request, res: Response) => {
    try {
      const { name, email, password, age } = req.newUser;
      const newUser = await userCreateService({ name, email, password, age });

      return res.status(200).send(newUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  };
}

export default User;
