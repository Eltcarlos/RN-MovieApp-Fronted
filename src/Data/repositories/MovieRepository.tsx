import { AxiosError } from "axios";
import { ApiResponseTopMovies } from "../../Domain/entities/ApiResponse";
import { Movie } from "../../Domain/entities/Movie";
import { MovieRepository } from "../../Domain/repositories/MovieRepository";
import { ApiBackend } from "../sources/remote/api/ApiBackend";

export class MovieRepositoryImpl implements MovieRepository {
  async getTopMovies(): Promise<Movie[]> {
    try {
      const response = await ApiBackend.get<Movie[]>(`/movie/moviesmostviews`);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
}
