import { ResponseApiBackend } from "../../Data/sources/remote/models/ReponsiveApiBackend";
import { User } from "../entities/User";

export interface UserRepository {
  getUser(user: User): Promise<User>;
  updateNotification(id: string, token: string): Promise<ResponseApiBackend>;
}
