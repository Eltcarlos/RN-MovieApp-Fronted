import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";

const { getPoster } = new MovieRepositoryImpl();

export const GetPosterUseCase = async () => {
  return await getPoster();
};
