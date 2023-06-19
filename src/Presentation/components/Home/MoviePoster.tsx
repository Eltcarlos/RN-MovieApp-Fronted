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
          height: 700,
          marginHorizontal: 2,
          paddingBottom: 20,
          paddingHorizontal: 7,
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={require("../../../../assets/poster.jpg")} style={styles.image} />
          <View style={styles.buttonContainer}>
            <View>
              <AntDesign style={{ textAlign: "center" }} name="plus" size={24} color="white" />
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "white", marginTop: 3 }}>My List</Text>
            </View>
            <View style={styles.separator} />
            <View
              style={{
                backgroundColor: "white",
                padding: 8,
                width: 120,
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
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "white", marginTop: 3 }}>Info</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "90%",
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
    left: -15,
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
    width: 20,
  },
});
