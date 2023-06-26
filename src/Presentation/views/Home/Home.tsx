import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { MoviePoster } from "../../components/Home/MoviePoster";
import HomeStyles from "./Styles";
import WatchingComponent from "../../components/Home/WatchingComponent";
import MostPopularComponent from "../../components/Home/MostPopularComponent";
import TrendingComponent from "../../components/Home/TrendingComponent";
import Navbar from "../../components/Home/Navbar";
import useViewModel from "./ViewModel";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import socket from "../../utils/Socket/SocketIO";

const HomeScreen = () => {
  const user = useSelector((store: any) => store.user);
  const scrollViewRef = useRef(null);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

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
    socket.on("my-list-get", async (data) => {
      setWatchListMovies(data);
    });
  }, []);

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    setIsScrollEnd(layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom);
  };

  return (
    <>
      <View style={HomeStyles.container}>
        <StatusBar backgroundColor="black" />
        <ScrollView ref={scrollViewRef} onScroll={handleScroll} scrollEventThrottle={4}>
          <View style={HomeStyles.navAndPoster}>
            <Navbar user={user}>
              <View style={HomeStyles.ImgContainer}>
                <MoviePoster />
              </View>
            </Navbar>
          </View>
          <View style={HomeStyles.flatListContainer}>
            <MostPopularComponent
              title="Las 10 películas más populares"
              movies={isScrollEnd ? topMovies : topMovies.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Terror"
              movies={isScrollEnd ? moviesTerror : moviesTerror.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Romance"
              movies={isScrollEnd ? moviesRomance : moviesRomance.slice(0, 10)}
            />

            {/* <ProgressComponent title="Avances" /> */}
            <MostPopularComponent
              title="Lo Mejor de Pixar"
              movies={isScrollEnd ? moviesPixar : moviesPixar.slice(0, 10)}
            />
            {watchingMovies.length !== 0 && (
              <WatchingComponent
                title={`Continuar viendo contenido de ${user.name}`}
                movies={isScrollEnd ? watchingMovies : watchingMovies.slice(0, 10)}
              />
            )}
            <TrendingComponent
              title="Para ver en Familia"
              movies={isScrollEnd ? moviesFamilia : moviesFamilia.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Acción"
              movies={isScrollEnd ? moviesAccion : moviesAccion.slice(0, 10)}
            />
            {watchListMovies.length !== 0 && (
              <TrendingComponent
                title="Mi lista"
                movies={isScrollEnd ? watchListMovies : watchListMovies.slice(0, 10)}
              />
            )}
            <TrendingComponent
              title="Peliculas de Suspenso"
              movies={isScrollEnd ? moviesSuspense : moviesSuspense.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Aventura"
              movies={isScrollEnd ? moviesAventura : moviesAventura.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Drama"
              movies={isScrollEnd ? moviesDrama : moviesDrama.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Historia"
              movies={isScrollEnd ? moviesHistoria : moviesHistoria.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Fantasía"
              movies={isScrollEnd ? moviesFantasia : moviesFantasia.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Animación"
              movies={isScrollEnd ? moviesAnimacion : moviesAnimacion.slice(0, 10)}
            />
            <TrendingComponent
              title="Peliculas de Comedia"
              movies={isScrollEnd ? moviesComedia : moviesComedia.slice(0, 10)}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
