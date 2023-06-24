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
    getWatchList,
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
            {/* <ProgressComponent title="Avances" /> */}
            <MostPopularComponent title="Las 10 películas más populares" movies={topMovies} />
            {watchingMovies.length !== 0 && (
              <WatchingComponent title={`Continuar viendo contenido de ${user.name}`} movies={watchingMovies} />
            )}
            {watchListMovies.length !== 0 && <TrendingComponent title="Mi lista" movies={watchListMovies} />}

            {/* <TrendingComponent title="Volver a ver" /> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
