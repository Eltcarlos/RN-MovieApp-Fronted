import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const MoviePoster = () => {
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
          <Image source={require("../../../../assets/poster.jpg")} style={styles.image} />
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <View>
          <AntDesign style={{ textAlign: "center" }} name="plus" size={24} color="white" />
          <Text style={{ fontSize: 12, color: "white", alignItems: "center", textAlign: "center" }}>My List</Text>
        </View>
        <View style={styles.separator} />
        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            flexDirection: "row",
          }}
        >
          <Entypo name="controller-play" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Play</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <AntDesign style={{ textAlign: "center" }} name="infocirlceo" size={24} color="white" />
          <Text style={{ fontSize: 12, color: "white", alignItems: "center", textAlign: "center" }}>Info</Text>
        </View>
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
