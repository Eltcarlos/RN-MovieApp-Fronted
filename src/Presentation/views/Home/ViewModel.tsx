import { useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";
import { GetTopMoviesUseCase } from "../../../Domain/useCases/movie/GetTopMovies";

const HomeViewModel = () => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [watchingMovies, setWatchingMovies] = useState<any>([]);

  const getTopMovies = async () => {
    const result = await GetTopMoviesUseCase();
    setTopMovies(result);
  };

  return {
    topMovies,
    watchingMovies,
    setWatchingMovies,
    getTopMovies,
  };
};

export default HomeViewModel;
