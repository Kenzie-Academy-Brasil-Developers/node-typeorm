import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";

const userListOneService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users.find(user => user.id === id);
};

export default userListOneService;
