import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = (width - 50) / 3;

const SearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    color: "white",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  movieItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  noResultsText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  gridContainer: {
    justifyContent: "space-between",
  },
  itemContainer: {
    width: itemWidth,
    marginBottom: 16,
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 185 / 278, // Asegura la relación de aspecto 185:278
    borderRadius: 16,
  },
  title: {
    marginTop: 4,
    color: "gray",
  },
});

export default SearchStyles;
