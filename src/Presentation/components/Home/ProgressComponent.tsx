import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MovieSlider } from "./MovieSlider";

interface Props {
  title?: string;
}

interface PropsProgress {
  item?: any;
  index?: any;
}
const Progress = ({ item, index }: PropsProgress) => {
  const uri = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
  return (
    <TouchableOpacity key={index} onPress={() => {}} style={{ width: 150, height: 150, margin: 10 }}>
      <View style={styles.Container}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const ProgressComponent = ({ title }: Props) => {
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
        height: title ? 220 : 220,
        top: 15,
        marginBottom: 20,
      }}
    >
      {title && <Text style={styles.text}>{title}</Text>}
      <View>
        <FlatList
          data={movies}
          renderItem={({ item, index }: any) => <Progress item={item} index={index} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ProgressComponent;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
  },
  image: {
    top: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
});
