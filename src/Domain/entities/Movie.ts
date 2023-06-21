import { Season } from "./Season";

export declare class Movie {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly year?: number;
  readonly numberOfSeasons?: number;
  readonly plot?: string;
  readonly cast?: string;
  readonly creator?: string;
  readonly categoryID: string;
  readonly seasons?: Season[];
}
