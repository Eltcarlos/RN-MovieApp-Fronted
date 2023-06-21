import { StyleSheet } from "react-native";

const WatchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    padding: 10,
  },
  headerText: {
    color: "white",
    fontSize: 15,
  },
  headerSeparator: {
    paddingHorizontal: 10,
  },
});

export default WatchStyles;
