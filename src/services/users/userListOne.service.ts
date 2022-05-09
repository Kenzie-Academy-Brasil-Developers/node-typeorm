import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../models/User";

const userListOneService = async (id: string) => {
  const user = await AppDataSource.getRepository(User).findOne({
    where: { id },
  });

  if (!user) throw new AppError("User not found");

  return user;
};

export default userListOneService;
