import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { MoviePoster } from "../../../components/Home/MoviePoster";
import HomeStyles from "./Styles";
import { GradientBackground } from "../../../components/Home/GradientBackground";
import WatchingComponent from "../../../components/Home/WatchingComponent";
import MostPopularComponent from "../../../components/Home/MostPopularComponent";
import TrendingComponent from "../../../components/Home/TrendingComponent";
import Navbar from "../../../components/Home/Navbar";
import ProgressComponent from "../../../components/Home/ProgressComponent";

const HomeScreen = () => {
  return (
    <>
      <View style={HomeStyles.container}>
        <ScrollView>
          <GradientBackground>
            <Navbar />
            <View style={HomeStyles.ImgContainer}>
              <MoviePoster />
            </View>
            <ProgressComponent title="Avances" />
            <MostPopularComponent title="Las 10 películas más populares" />
          </GradientBackground>
          <View style={HomeStyles.flatListContainer}>
            <WatchingComponent title={`Continuar viendo contenido de Carlos`} />
            <TrendingComponent title="Tendencias ahora" />
            <TrendingComponent title="Volver a ver" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
