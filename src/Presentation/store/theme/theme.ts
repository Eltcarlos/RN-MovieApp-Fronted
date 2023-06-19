import { createSlice } from "@reduxjs/toolkit";
import { darkTheme } from "../../utils/theme/DarkTheme";
import { lightTheme } from "../../utils/theme/LightTheme";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: true,
    theme: {},
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      state.theme = state.darkMode ? darkTheme : lightTheme;
    },
  },
});
