import { createSlice, configureStore } from "@reduxjs/toolkit";

// Definir el slice de usuario
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    image: "",
    subscribed: false,
    subscriptionPlan: "",
    watchlist: [],
    currentlyWatching: [],
    session_token: "",
  },
  reducers: {
    setUser: (state, { payload }) => {
      return payload;
    },
    clearUser: (state) => {
      return {
        id: "",
        name: "",
        image: "",
        subscribed: false,
        subscriptionPlan: "",
        watchlist: [],
        currentlyWatching: [],
        session_token: "",
      };
    },
  },
});

// Exportar las acciones del slice de usuario
export const { setUser, clearUser } = UserSlice.actions;
