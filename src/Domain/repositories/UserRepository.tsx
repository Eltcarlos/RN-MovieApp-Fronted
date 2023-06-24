import { User } from "../entities/User";

export interface UserRepository {
  getUser(user: User): Promise<User>;
}
