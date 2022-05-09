import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";
import bcrypt from "bcrypt";

const userUpdateOneService = async (
  id: string,
  { age, email, name, password }: Partial<User>
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id },
  });

  if (!user) throw new Error("User not found");

  if (password && (await bcrypt.compare(password, user.password)))
    throw new Error("Inform a different password");

  if (password)
    await userRepository.update(user.id, {
      password: await bcrypt.hash(password, 8),
    });

  await userRepository.update(user.id, {
    email,
    name,
    age,
    updated_at: new Date(),
  });

  return true;
};

export default userUpdateOneService;
