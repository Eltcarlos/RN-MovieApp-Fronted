import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ApiBackend } from "../sources/remote/api/ApiBackend";
import { ENV } from "../../Presentation/utils/contants/constants";
import { ResponseApiBackend } from "../sources/remote/models/ReponsiveApiBackend";

export class UserRepositoryImpl implements UserRepository {
  async getUser(user: User): Promise<any> {
    try {
      const response = await ApiBackend.post<User>(`${ENV.API_ROUTES.GETUSER}`, {
        user,
      });
      return response.data;
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
    }
  }
  async updateNotification(id: string, token: string): Promise<ResponseApiBackend> {
    try {
      const response = await ApiBackend.put<ResponseApiBackend>(`${ENV.API_ROUTES.UPDATEUSERNOTIFICATION}`, {
        id: id,
        token: token,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBackend = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
}
