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
    paddingLeft: 5,
  },
  headerText: {
    color: "white",
    fontSize: 15,
    zIndex: 10,
    justifyContent: "center",
    textAlign: "center",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: -40,
  },
  actionSeparator: {
    paddingHorizontal: 70,
  },
  textRotate: {
    color: "white",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 17,
    right: 17,
  },
  timeLine: {
    paddingHorizontal: 20,
  },
  slider: {},
});

export default WatchStyles;
