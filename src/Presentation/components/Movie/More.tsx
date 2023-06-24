import React from "react";
import { Image, Pressable, View } from "react-native";
import { Movie } from "../../../Domain/entities/Movie";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

interface Props {
  item: Movie;
}

const More = ({ item }: Props) => {
  return (
    <Pressable style={{ margin: 10 }} onPress={() => {}}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: item.poster }} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>

        <AntDesign name="download" size={24} color={"white"} />
      </View>

      <Text style={styles.plot}>{item.plot}</Text>
    </Pressable>
  );
};

export default More;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
  duration: {
    color: "darkgrey",
    fontSize: 10,
  },
  plot: {
    color: "darkgrey",
  },
});
