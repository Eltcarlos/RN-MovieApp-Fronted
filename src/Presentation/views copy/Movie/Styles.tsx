import { StyleSheet } from "react-native";

const MovieStyles = StyleSheet.create({
  container: {
    flex: 1,
    top: -25,
  },
  progressContainer: {
    flexDirection: "row",
    height: 200,
    width: "100%",
    backgroundColor: "green",
  },
  progress: {
    flex: 1,
    alignSelf: "stretch",
  },
  progressView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  progressText: {
    textAlign: "center",
    color: "white",
    width: 70,
    height: 25,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  progressIcon: {
    width: 25,
    height: 25,
    borderRadius: 75,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  timeLine: {
    top: 50,
  },
  infoContainer: {},

  textTitle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    paddingTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    width: 120,
    justifyContent: "space-between",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: 10,
    width: "100%",
  },
  button: {
    padding: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    flexDirection: "row",
  },
  description: {
    color: "white",
    marginHorizontal: 12,
    fontSize: 11,
    letterSpacing: 1,
  },
  actions: {
    paddingTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  tabIndicator: {
    backgroundColor: "red",
  },
  tabItemContainer: {
    backgroundColor: "transparent",
  },
});

export default MovieStyles;
