import { Category } from "./Category";
import { Genre } from "./Genre";

export interface Movie {
  category: Category;
  _id: string;
  title: string;
  poster: string;
  advance: string;
  video: string;
  director: string;
  plot: string;
  age?: Number;
  genres: Genre[];
  releaseYear: number;
  duration: number;
  cast: string;
  totalViews: number;
  __v: number;
}
