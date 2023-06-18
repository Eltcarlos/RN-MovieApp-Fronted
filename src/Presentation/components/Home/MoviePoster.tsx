import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const MoviePoster = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={{
          width: 360,
          height: 600,
          marginHorizontal: 2,
          paddingBottom: 20,
          paddingHorizontal: 7,
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={require("../../../../assets/poster.jpg")} style={styles.image} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{ ...styles.button, backgroundColor: "white" }} onPress={() => {}}>
              <Entypo name="controller-play" size={24} color="black" />
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={{ ...styles.button, backgroundColor: "rgba(236,236,236,0.5)" }} onPress={() => {}}>
              <AntDesign style={{ textAlign: "center" }} name="plus" size={24} color="white" />
              <Text style={{ ...styles.buttonText, color: "white" }}>My List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
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
    borderWidth: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    bottom: 1,
    paddingBottom: 10,
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
    width: 3,
  },
});
