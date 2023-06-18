import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { MovieSlider } from "./MovieSlider";
import { useFonts } from "expo-font";

interface Props {
  title?: string;
}

interface PropsTopTen {
  item?: any;
  index?: any;
}

const TopTen = ({ item, index }: PropsTopTen) => {
  const [fontsLoaded] = useFonts({
    Ultra: require("../../../../assets/fonts/golden-dragon-outline.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.topTenContainer}>
      <Text style={styles.topTenText}>{index + 1}</Text>
      <MovieSlider movie={item} width={140} height={200} />
    </View>
  );
};

const TrendingComponent = ({ title }: Props) => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=49d6be83fe4968b981c4322b48b33f2d&language=en-US&limit=10`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  console.log(movies[0]?.poster_path);

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && <Text style={styles.text}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({ item, index }: any) => <TopTen item={item} index={index} />}
        keyExtractor={(item) => item.id.toString()}
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
    fontSize: 80,
    color: "white",
    fontFamily: "Ultra",
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
