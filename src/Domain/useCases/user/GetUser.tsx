import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";

const { getUser } = new UserRepositoryImpl();

export const GetUserUseCase = async (user: User) => {
  return await getUser(user);
};
