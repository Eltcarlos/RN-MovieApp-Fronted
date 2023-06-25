import { useState } from "react";
import { GetSearchMoviesUseCase } from "../../../Domain/useCases/movie/GetSearchMovies";

const SearchViewModel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  const handleSearch = async () => {
    const results = await GetSearchMoviesUseCase(searchQuery);
    setSearchResults(results);
  };
  return {
    searchQuery,
    searchResults,
    handleSearch,
    setSearchResults,
    setSearchQuery,
  };
};

export default SearchViewModel;
