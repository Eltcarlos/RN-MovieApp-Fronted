import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";
import { Movie } from "../../entities/Movie";

const { getSimilarMovies } = new MovieRepositoryImpl();

export const GetSimilarMoviesUseCase = async (movie: Movie) => {
  return await getSimilarMovies(movie);
};
