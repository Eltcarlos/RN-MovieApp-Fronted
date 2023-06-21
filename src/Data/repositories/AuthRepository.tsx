import { AxiosError } from "axios";
import { ApiBackend } from "../sources/remote/api/ApiBackend";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ResponseApiBackend } from "../sources/remote/models/ReponsiveApiBackend";
import { ENV } from "../../Presentation/utils/contants/constants";

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<ResponseApiBackend> {
    try {
      const response = await ApiBackend.post<ResponseApiBackend>(`${ENV.API_ROUTES.LOGIN}`, {
        email: email,
        password: password,
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
