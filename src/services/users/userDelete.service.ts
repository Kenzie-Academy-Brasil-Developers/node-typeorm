import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new Error("User not found");

  userRepository.delete(id);

  return true;
};

export default userDeleteService;
