import { useEffect, useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";
import { GetTopMoviesUseCase } from "../../../Domain/useCases/movie/GetTopMovies";
import { GetUserUseCase } from "../../../Domain/useCases/user/GetUser";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/User/User";
import { GetWatchListUseCase } from "../../../Domain/useCases/movie/GetWatchList";
import { GetWatchingListUseCase } from "../../../Domain/useCases/movie/GetWatchingList";

const HomeViewModel = (user: any) => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [watchingMovies, setWatchingMovies] = useState<any>([]);
  const [watchListMovies, setWatchListMovies] = useState<any>([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setWatchListMovies(user.watchlist);
  //   console.log(watchListMovies);
  // });

  const getUser = async () => {
    const result = await GetUserUseCase(user.id);
    dispatch(setUser(result));
  };

  const getTopMovies = async () => {
    const result = await GetTopMoviesUseCase();
    setTopMovies(result);
  };

  const getWatchList = async () => {
    const result = await GetWatchListUseCase(user.watchlist);
    setWatchListMovies(result);
  };

  const getWatchingList = async () => {
    const result = await GetWatchingListUseCase(user.currentlyWatching);
    setWatchingMovies(result);
  };

  return {
    topMovies,
    watchingMovies,
    setWatchingMovies,
    watchListMovies,
    getWatchingList,
    setWatchListMovies,
    getWatchList,
    getTopMovies,
    getUser,
  };
};

export default HomeViewModel;
