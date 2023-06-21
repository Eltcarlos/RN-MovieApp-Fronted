import { Movie } from "../entities/Movie";

export interface MovieRepository {
  getTopMovies(): Promise<Movie[]>;
}
