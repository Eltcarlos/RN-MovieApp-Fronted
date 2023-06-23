import { StyleSheet } from "react-native";

const WatchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  headerContainer: {
    top: 0,
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  headerText: {
    color: "white",
    fontSize: 15,
    zIndex: 10,
  },
  headerSeparator: {
    paddingHorizontal: 10,
  },
  controls: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    justifyContent: "space-between",
  },
  actions: {
    bottom: 0,
    flexDirection: "row",
  },
});

export default WatchStyles;
