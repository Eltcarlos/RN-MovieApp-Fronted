import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamListApp } from "../../../navigator/AppNavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { MoviePoster } from "../../../components/Home/MoviePoster";
import { GradientBackground } from "../../../components/Home/GradientBackground";
import { getImageColors } from "../../../helpers/getColors";
import { GradientContext } from "../../../context/GradientContext";
import ImageColors from "react-native-image-colors";

interface Props extends StackScreenProps<RootStackParamListApp, "HomeScreen"> {}

const HomeScreen = ({ navigation, route }: Props) => {
  // const { setMainColors } = useContext(GradientContext);
  // const getPosterColors = async (index: number) => {
  //   const uri = require("../../../../../assets/poster.jpg");
  //   const [primary = "green", secondary = "orange"] = await getImageColors(uri);
  //   setMainColors({ primary, secondary });
  // };

  // useEffect(() => {
  //   getPosterColors(0);
  // }, []);

  return (
    <ScrollView>
      <MoviePoster />
    </ScrollView>
  );
};

export default HomeScreen;
