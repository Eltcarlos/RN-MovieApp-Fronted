import { Season } from "./Season";

export declare class Episode {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration: string;
  readonly plot?: string;
  readonly video: string;
  readonly season?: Season;
}
