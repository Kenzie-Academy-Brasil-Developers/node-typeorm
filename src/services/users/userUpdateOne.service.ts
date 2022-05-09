import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/AppError";

const userUpdateOneService = async (
  id: string,
  { age, email, name, password }: Partial<User>
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id },
  });

  if (!user) throw new AppError("User not found");

  if (password && (await bcrypt.compare(password, user.password)))
    throw new AppError("Inform a different password");

  (password || email || name || age) && (user.updated_at = new Date());
  password && (user.password = await bcrypt.hash(password, 8));
  email && (user.email = email);
  name && (user.name = name);
  age && (user.age = age);

  return await userRepository.save(user);
};

export default userUpdateOneService;
