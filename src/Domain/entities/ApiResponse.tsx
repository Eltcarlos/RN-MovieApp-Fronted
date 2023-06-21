import { Movie } from "./Movie";

export interface ApiResponseTopMovies {
  success: boolean;
  message: string;
  data: Movie[];
}
