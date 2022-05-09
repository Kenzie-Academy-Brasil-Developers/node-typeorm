import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";

import { User } from "../../models/User";

import { IUserCreate } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const emailAlreadyExists = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (emailAlreadyExists) throw new AppError("Email already in use.", 401);

  const user = new User();
  user.name = name;
  user.email = email;
  user.age = age;
  user.password = await bcrypt.hash(password, 8);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
