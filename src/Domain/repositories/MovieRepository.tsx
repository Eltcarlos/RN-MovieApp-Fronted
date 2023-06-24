import { Movie } from "../entities/Movie";

export interface MovieRepository {
  getTopMovies(): Promise<Movie[]>;
  getWatchList(watchlist: any): Promise<Movie[]>;
}
