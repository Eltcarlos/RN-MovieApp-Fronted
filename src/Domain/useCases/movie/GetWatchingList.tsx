import { MovieRepositoryImpl } from "../../../Data/repositories/MovieRepository";

const { getWatchingList } = new MovieRepositoryImpl();

export const GetWatchingListUseCase = async (watchinglist: any) => {
  return await getWatchingList(watchinglist);
};
