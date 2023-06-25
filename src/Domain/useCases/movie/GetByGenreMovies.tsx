import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";

const { getByGenreMovies } = new MovieRepositoryImpl();

export const GetByGenreMoviesUseCase = async (genre: string) => {
  return await getByGenreMovies(genre);
};
