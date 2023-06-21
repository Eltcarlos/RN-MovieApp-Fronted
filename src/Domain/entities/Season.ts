import { Episode } from "./Episode";
import { Movie } from "./Movie";

export declare class Season {
  readonly id: string;
  readonly name: string;
  readonly movie?: Movie;
  readonly episodes?: Episode[];
}
