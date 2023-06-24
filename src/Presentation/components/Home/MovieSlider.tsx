import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Movie } from "../../../Domain/entities/Movie";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieSlider = ({ movie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieScreen", movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: movie.poster }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 3,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
});
