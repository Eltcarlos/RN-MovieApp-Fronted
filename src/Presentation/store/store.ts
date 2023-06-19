import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./theme/theme";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
