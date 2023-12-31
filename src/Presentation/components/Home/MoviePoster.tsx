import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { GetPosterUseCase } from "../../../Domain/useCases/movie/GetPoster";
import { ActivityIndicator } from "react-native";

export const MoviePoster = () => {
  const [movie, setMovie] = useState<any>({});
  const navigation = useNavigation();

  const getPoster = async () => {
    const result = await GetPosterUseCase();
    setMovie(result);
  };

  useEffect(() => {
    getPoster();
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={{
          width: Dimensions.get("window").width,
          height: 600,
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: movie.poster }} style={styles.image} />
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <View />
        <View style={styles.separator} />
        <Pressable
          style={{
            backgroundColor: "white",
            padding: 8,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("MovieScreen", movie)}
        >
          <Entypo name="controller-play" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Play</Text>
        </Pressable>
        <View style={styles.separator} />
        <View />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageContainer: {
    borderColor: "white",
    borderRadius: 9,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 10,
    marginTop: 10,
  },
  button: {
    padding: 8,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  separator: {
    width: 40,
  },
});
