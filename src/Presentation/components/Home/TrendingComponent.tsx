import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { MovieSlider } from "./MovieSlider";

interface Props {
  title?: string;
  movies: any;
}

const TrendingComponent = ({ title, movies }: Props) => {
  return (
    <View
      style={{
        height: title ? 220 : 220,
        top: 12,
        marginBottom: 20,
      }}
    >
      {title && <Text style={styles.text}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({ item, index }: any) => <MovieSlider movie={item} width={140} height={200} />}
        keyExtractor={(item) => item._id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingComponent;

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
