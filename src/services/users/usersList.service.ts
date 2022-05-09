import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";

const usersListService = async () =>
  await AppDataSource.getRepository(User).find();

export default usersListService;
