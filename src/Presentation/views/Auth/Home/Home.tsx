import React from "react";
import { ScrollView, Text, View } from "react-native";
import { MoviePoster } from "../../../components/Home/MoviePoster";
import HomeStyles from "./Styles";
import TrendingComponent from "../../../components/Home/TrendingComponent";

const HomeScreen = () => {
  return (
    <View style={HomeStyles.container}>
      <ScrollView>
        <View style={HomeStyles.ImgContainer}>
          <MoviePoster />
        </View>
        <TrendingComponent title="Las 10 películas más populares" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
