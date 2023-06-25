import { useEffect, useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";
import { GetTopMoviesUseCase } from "../../../Domain/useCases/movie/GetTopMovies";
import { GetUserUseCase } from "../../../Domain/useCases/user/GetUser";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/User/User";
import { GetWatchListUseCase } from "../../../Domain/useCases/movie/GetWatchList";
import { GetWatchingListUseCase } from "../../../Domain/useCases/movie/GetWatchingList";
import { GetByGenreMoviesUseCase } from "../../../Domain/useCases/movie/GetByGenreMovies";

const HomeViewModel = (user: any) => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [watchingMovies, setWatchingMovies] = useState<any>([]);
  const [watchListMovies, setWatchListMovies] = useState<any>([]);
  const [moviesTerror, setMoviesTerror] = useState<any>([]);
  const [moviesRomance, setMoviesRomance] = useState<any>([]);
  const [moviesPixar, setMoviesPixar] = useState<any>([]);
  const [moviesFamilia, setMoviesFamilia] = useState<any>([]);
  const [moviesAccion, setMoviesAccion] = useState<any>([]);
  const [moviesSuspense, setMoviesSuspense] = useState<any>([]);
  const [moviesAventura, setMoviesAventura] = useState<any>([]);
  const [moviesDrama, setMoviesDrama] = useState<any>([]);
  const [moviesHistoria, setMoviesHistoria] = useState<any>([]);
  const [moviesFantasia, setMoviesFantasia] = useState<any>([]);
  const [moviesAnimacion, setMoviesAnimacion] = useState<any>([]);
  const [moviesComedia, setMoviesComedia] = useState<any>([]);

  const dispatch = useDispatch();

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

  const getMoviesTerror = async () => {
    const result = await GetByGenreMoviesUseCase("Terror");
    setMoviesTerror(result);
  };

  const getMoviesRomance = async () => {
    const result = await GetByGenreMoviesUseCase("Romance");
    setMoviesRomance(result);
  };

  const getMoviesPixar = async () => {
    const result = await GetByGenreMoviesUseCase("Pixar");
    setMoviesPixar(result);
  };

  const getMoviesFamilia = async () => {
    const result = await GetByGenreMoviesUseCase("Familia");
    setMoviesFamilia(result);
  };

  const getMoviesAccion = async () => {
    const result = await GetByGenreMoviesUseCase("Acción");
    setMoviesAccion(result);
  };

  const getMoviesSuspense = async () => {
    const result = await GetByGenreMoviesUseCase("Suspense");
    setMoviesSuspense(result);
  };

  const getMoviesAventura = async () => {
    const result = await GetByGenreMoviesUseCase("Aventura");
    setMoviesAventura(result);
  };

  const getMoviesDrama = async () => {
    const result = await GetByGenreMoviesUseCase("Drama");
    setMoviesDrama(result);
  };

  const getMoviesHistoria = async () => {
    const result = await GetByGenreMoviesUseCase("Historia");
    setMoviesHistoria(result);
  };

  const getMoviesFantasia = async () => {
    const result = await GetByGenreMoviesUseCase("Fantasía");
    setMoviesFantasia(result);
  };

  const getMoviesAnimacion = async () => {
    const result = await GetByGenreMoviesUseCase("Animación");
    setMoviesAnimacion(result);
  };

  const getMoviesComedia = async () => {
    const result = await GetByGenreMoviesUseCase("Comedia");
    setMoviesComedia(result);
  };

  return {
    topMovies,
    watchingMovies,
    watchListMovies,
    moviesTerror,
    moviesRomance,
    moviesPixar,
    moviesFamilia,
    moviesAccion,
    moviesSuspense,
    moviesAventura,
    moviesDrama,
    moviesHistoria,
    moviesFantasia,
    moviesAnimacion,
    moviesComedia,
    getMoviesComedia,
    getMoviesAnimacion,
    getMoviesFantasia,
    getMoviesHistoria,
    getMoviesDrama,
    getMoviesAventura,
    getMoviesSuspense,
    getMoviesAccion,
    getMoviesFamilia,
    getMoviesPixar,
    getMoviesRomance,
    setWatchingMovies,
    getMoviesTerror,
    getWatchingList,
    setWatchListMovies,
    getWatchList,
    getTopMovies,
    getUser,
  };
};

export default HomeViewModel;
