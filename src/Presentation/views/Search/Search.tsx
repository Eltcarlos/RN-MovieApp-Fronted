import React from "react";
import { FlatList, Image, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import SearchStyles from "./Styles";
import useViewModel from "./ViewModel";
import { useNavigation } from "@react-navigation/native";

const MovieItem = ({ movie }: any) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("MovieScreen", movie)}>
        <View style={SearchStyles.itemContainer}>
          <Image source={{ uri: movie.poster }} style={SearchStyles.image} resizeMode="cover" />
        </View>
      </TouchableWithoutFeedback>
      <View style={{ paddingHorizontal: 5 }} />
    </>
  );
};

const SearchScreen = () => {
  const { searchQuery, searchResults, handleSearch, setSearchQuery } = useViewModel();

  return (
    <View style={SearchStyles.container}>
      <TextInput
        style={SearchStyles.searchInput}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />

      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <MovieItem movie={item} />}
          keyExtractor={(item) => item._id.toString()}
          numColumns={3}
          contentContainerStyle={SearchStyles.gridContainer}
        />
      ) : (
        <Text style={SearchStyles.noResultsText}>No results found</Text>
      )}
    </View>
  );
};

export default SearchScreen;
