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

const HomeScreen = () => {
  const { topMovies, getTopMovies } = useViewModel();
  const user = useSelector((store: any) => store.user);
  useEffect(() => {
    getTopMovies();
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
            {user.currentlyWatching.length !== 0 && (
              <WatchingComponent title={`Continuar viendo contenido de ${user.name}`} />
            )}
            {/* <TrendingComponent title="Tendencias ahora" /> */}

            {/* <TrendingComponent title="Volver a ver" /> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
