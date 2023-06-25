import { AxiosError } from "axios";
import { ApiResponseTopMovies } from "../../Domain/entities/ApiResponse";
import { Movie } from "../../Domain/entities/Movie";
import { MovieRepository } from "../../Domain/repositories/MovieRepository";
import { ApiBackend } from "../sources/remote/api/ApiBackend";
import { ENV } from "../../Presentation/utils/contants/constants";

export class MovieRepositoryImpl implements MovieRepository {
  async getTopMovies(): Promise<Movie[]> {
    try {
      const response = await ApiBackend.get<Movie[]>(`${ENV.API_ROUTES.TOPTENMOVIES}`);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
  async getWatchList(watchlist: any): Promise<Movie[]> {
    try {
      const response = await ApiBackend.post<Movie[]>(`${ENV.API_ROUTES.GETWATCHLIST}`, { watchlist });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
  async getWatchingList(watchinglist: any): Promise<Movie[]> {
    try {
      const response = await ApiBackend.post<Movie[]>(`${ENV.API_ROUTES.GETWATCHINGLIST}`, { watchinglist });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
  async getSimilarMovies(movie: Movie): Promise<Movie[]> {
    try {
      const response = await ApiBackend.post<Movie[]>(`${ENV.API_ROUTES.GETSIMILARMOVIES}`, { movie });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
  async getByGenreMovies(genre: string): Promise<Movie[]> {
    try {
      const response = await ApiBackend.get<Movie[]>(`${ENV.API_ROUTES.GETBYGENREMOVIES}/${genre}`);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
}
