import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../models/User";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError("User not found");

  return await userRepository.delete(id);
};

export default userDeleteService;
