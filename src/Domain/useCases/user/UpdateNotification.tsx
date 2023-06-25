import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";

const { updateNotification } = new UserRepositoryImpl();

export const UpdateNotificationTokenUserUseCase = async (id: string, token: string) => {
  return await updateNotification(id, token);
};
