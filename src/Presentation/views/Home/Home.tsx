import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { MoviePoster } from "../../components/Home/MoviePoster";
import HomeStyles from "./Styles";
import WatchingComponent from "../../components/Home/WatchingComponent";
import MostPopularComponent from "../../components/Home/MostPopularComponent";
import TrendingComponent from "../../components/Home/TrendingComponent";
import Navbar from "../../components/Home/Navbar";
import ProgressComponent from "../../components/Home/ProgressComponent";
import useViewModel from "./ViewModel";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import socket from "../../utils/Socket/SocketIO";

const HomeScreen = () => {
  const user = useSelector((store: any) => store.user);
  const {
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
    getWatchList,
    getMoviesTerror,
    getWatchingList,
    getUser,
    setWatchListMovies,
    setWatchingMovies,
    getTopMovies,
  } = useViewModel(user);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getTopMovies();
  }, []);

  useEffect(() => {
    getWatchList();
  }, []);

  useEffect(() => {
    getWatchingList();
  }, []);

  useEffect(() => {
    getMoviesTerror();
    getMoviesRomance();
    getMoviesPixar();
    getMoviesFamilia();
    getMoviesAccion();
    getMoviesSuspense();
    getMoviesAventura();
    getMoviesDrama();
    getMoviesHistoria();
    getMoviesFantasia();
    getMoviesAnimacion();
    getMoviesComedia();
  }, []);

  useEffect(() => {
    socket.connect();
    socket.on("watchingMovies", async (data) => {
      setWatchingMovies(data);
    });
  }, []);

  useEffect(() => {
    socket.connect();
    socket.on("my-list-get", async (data) => {
      setWatchListMovies(data);
    });
  }, []);

  return (
    <>
      <View style={HomeStyles.container}>
        <StatusBar backgroundColor="black" />
        <ScrollView>
          <View style={HomeStyles.navAndPoster}>
            <Navbar user={user}>
              <View style={HomeStyles.ImgContainer}>
                <MoviePoster />
              </View>
            </Navbar>
          </View>
          <View style={HomeStyles.flatListContainer}>
            <MostPopularComponent title="Las 10 películas más populares" movies={topMovies} />
            <TrendingComponent title="Peliculas de Terror" movies={moviesTerror} />
            <TrendingComponent title="Peliculas de Romance" movies={moviesRomance} />

            {/* <ProgressComponent title="Avances" /> */}
            <MostPopularComponent title="Lo Mejor de Pixar" movies={moviesPixar} />
            {watchingMovies.length !== 0 && (
              <WatchingComponent title={`Continuar viendo contenido de ${user.name}`} movies={watchingMovies} />
            )}
            <TrendingComponent title="Para ver en Familia" movies={moviesFamilia} />
            <TrendingComponent title="Peliculas de Acción" movies={moviesAccion} />
            {watchListMovies.length !== 0 && <TrendingComponent title="Mi lista" movies={watchListMovies} />}
            <TrendingComponent title="Peliculas de Suspenso" movies={moviesSuspense} />
            <TrendingComponent title="Peliculas de Aventura" movies={moviesAventura} />
            <TrendingComponent title="Peliculas de Drama" movies={moviesDrama} />
            <TrendingComponent title="Peliculas de Historia" movies={moviesHistoria} />
            <TrendingComponent title="Peliculas de Fantasía" movies={moviesFantasia} />
            <TrendingComponent title="Peliculas de Animación" movies={moviesAnimacion} />
            <TrendingComponent title="Peliculas de Comedia" movies={moviesComedia} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
