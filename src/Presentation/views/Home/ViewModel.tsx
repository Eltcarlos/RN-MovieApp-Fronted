import { useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";
import { GetTopMoviesUseCase } from "../../../Domain/useCases/movie/GetTopMovies";

const HomeViewModel = () => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const getTopMovies = async () => {
    const result = await GetTopMoviesUseCase();
    setTopMovies(result);
  };
  return {
    topMovies,
    getTopMovies,
  };
};

export default HomeViewModel;
