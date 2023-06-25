import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";

const { getSearchMovies } = new MovieRepositoryImpl();

export const GetSearchMoviesUseCase = async (item: string) => {
  return await getSearchMovies(item);
};
