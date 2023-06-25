import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { signup } = new AuthRepositoryImpl();

export const SignUpAuthUseCase = async (name: string, email: string, password: string) => {
  return await signup(name, email, password);
};
