import React from "react";
import { ScrollView, Text, View } from "react-native";
import { MoviePoster } from "../../../components/Home/MoviePoster";
import HomeStyles from "./Styles";

const HomeScreen = () => {
  return (
    <View style={HomeStyles.container}>
      <ScrollView>
        <View style={HomeStyles.ImgContainer}>
          <MoviePoster />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
