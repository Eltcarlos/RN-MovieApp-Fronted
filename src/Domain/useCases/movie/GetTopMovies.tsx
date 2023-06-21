import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";

const { getTopMovies } = new MovieRepositoryImpl();

export const GetTopMoviesUseCase = async () => {
  return await getTopMovies();
};
