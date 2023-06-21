export interface User {
  id: string;
  name: string;
  image: string;
  subscribed: boolean;
  subscriptionPlan: string;
  watchlist: string[];
  currentlyWatching: string[];
  session_token: string;
}
