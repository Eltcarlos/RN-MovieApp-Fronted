import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MovieSlider } from "./MovieSlider";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../../../Domain/entities/Movie";

interface Props {
  title?: string;
  movies: Movie[];
}

interface PropsTopTen {
  item?: any;
  index?: any;
}

const TopTen = ({ item, index }: PropsTopTen) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate("MovieScreen", item)}
      style={styles.topTenContainer}
    >
      <Text style={styles.topTenText}>{index + 1}</Text>
      <MovieSlider movie={item} width={140} height={200} />
    </TouchableOpacity>
  );
};

const MostPopularComponent = ({ title, movies }: Props) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
        top: 12,
      }}
    >
      {title && <Text style={styles.text}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({ item, index }: any) => <TopTen item={item} index={index} />}
        keyExtractor={(item) => item._id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MostPopularComponent;

const styles = StyleSheet.create({
  topTenContainer: {
    flexDirection: "row",
  },
  topTenText: {
    fontSize: 75,
    color: "white",
    fontWeight: "bold",
    top: 95,
    left: 20,
  },
  text: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
});
