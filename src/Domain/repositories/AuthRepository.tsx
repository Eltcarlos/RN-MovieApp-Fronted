import { ResponseApiBackend } from "../../Data/sources/remote/models/ReponsiveApiBackend";

export interface AuthRepository {
  login(email: string, password: string): Promise<ResponseApiBackend>;
}
