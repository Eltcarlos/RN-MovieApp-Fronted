import { Movie } from "../entities/Movie";

export interface MovieRepository {
  getTopMovies(): Promise<Movie[]>;
  getWatchList(watchlist: any): Promise<Movie[]>;
  getWatchList(watchinglist: any): Promise<Movie[]>;
  getSimilarMovies(movie: Movie): Promise<Movie[]>;
  getByGenreMovies(genre: string): Promise<Movie[]>;
  getSearchMovies(item: string): Promise<Movie[]>;
  getPoster(): Promise<Movie>;
}
