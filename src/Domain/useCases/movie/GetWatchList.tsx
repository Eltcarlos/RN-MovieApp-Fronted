import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";

const { getWatchList } = new MovieRepositoryImpl();

export const GetWatchListUseCase = async (watchlist: any) => {
  return await getWatchList(watchlist);
};
