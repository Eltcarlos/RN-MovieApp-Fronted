import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Nuesta selección para ti</Text>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="chromecast" size={25} color="white" />
          <View style={styles.spacer} />
          <FontAwesome5 name="search" size={22} color="white" />
          <View style={styles.spacer} />

          <Image style={styles.logo} source={require("../../../../assets/default-blue.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 50,
    width: "100%",
    flexDirection: "row",
  },
  text: {
    padding: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  logo: {
    height: 25,
    width: 25,
  },
  spacer: {
    paddingHorizontal: 5,
  },
});
