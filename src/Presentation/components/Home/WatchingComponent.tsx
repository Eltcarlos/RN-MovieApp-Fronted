import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { MovieSlider } from "./MovieSlider";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TimeLine } from "../Shared/TimeLine";

interface Props {
  title?: string;
}

interface PropsTopTen {
  item?: any;
  index?: any;
}

const WatchingView = ({ item, index }: PropsTopTen) => {
  const status = {
    playableDurationMillis: 2,
    positionMillis: 2,
  };
  return (
    <View style={styles.Container}>
      <View style={styles.imgContainer}>
        <MovieSlider movie={item} width={155} height={200} />
      </View>
      <TimeLine status={status} />

      <View style={styles.actionsContainer}>
        <AntDesign style={{ textAlign: "center" }} name="infocirlceo" size={25} color="white" />
        <View style={{ paddingHorizontal: 30 }} />
        <Entypo style={{ textAlign: "center" }} name="dots-three-vertical" size={25} color="white" />
      </View>
    </View>
  );
};

const WatchingComponent = ({ title }: Props) => {
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
      <View>
        <FlatList
          data={movies}
          renderItem={({ item, index }: any) => <WatchingView item={item} index={index} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default WatchingComponent;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  Container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#252525",
    height: 230,
    width: 140,
    justifyContent: "center",
    marginLeft: 9,
    alignItems: "center",
    borderColor: "white",
  },
  imgContainer: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});
