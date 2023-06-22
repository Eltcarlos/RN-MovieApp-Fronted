import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Navbar = ({ children, user }: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Nuesta selección para ti</Text>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="chromecast" size={18} color="white" />
          <View style={styles.spacer} />
          <FontAwesome5 name="search" size={18} color="white" />
          <View style={styles.spacer} />

          <Image style={styles.logo} source={{ uri: user.image }} />
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    height: 50,
    width: "100%",
    flexDirection: "row",
  },
  text: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  logo: {
    height: 20,
    width: 20,
  },
  spacer: {
    paddingHorizontal: 8,
  },
});
