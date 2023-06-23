import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MovieSlider } from "./MovieSlider";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TimeLine } from "../Shared/TimeLine";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title?: string;
  movies: any;
}

interface PropsTopTen {
  item?: any;
}

const WatchingView = ({ item }: PropsTopTen) => {
  const status = {
    playableDurationMillis: item.duration * 60 * 1000,
    positionMillis: item.elapsedTime,
  };
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.Container} onPress={() => navigation.navigate("MovieScreen", item)}>
      <View style={styles.imgContainer}>
        <MovieSlider movie={item} width={155} height={200} />
      </View>
      <TimeLine status={status} />

      <View style={styles.actionsContainer}>
        <AntDesign style={{ textAlign: "center" }} name="infocirlceo" size={25} color="white" />
        <View style={{ paddingHorizontal: 30 }} />
        <Entypo style={{ textAlign: "center" }} name="dots-three-vertical" size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const WatchingComponent = ({ title, movies }: Props) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
        marginBottom: 50,
      }}
    >
      {title && <Text style={styles.text}>{title}</Text>}
      <View>
        <FlatList
          data={movies}
          renderItem={({ item, index }: any) => <WatchingView item={item} />}
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
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
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
