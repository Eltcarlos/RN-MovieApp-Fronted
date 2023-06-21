import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/Presentation/navigator/RootNavigation";
import { ThemeProvider } from "react-native-elements";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/Presentation/store/store";
import { lightTheme } from "./src/Presentation/utils/theme/LightTheme";
import { darkTheme } from "./src/Presentation/utils/theme/DarkTheme";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function App() {
  // const { darkMode } = useSelector((state: any) => state.theme);
  useEffect(() => {
    async function Navigation() {
      await NavigationBar.setBackgroundColorAsync("black");
    }
    Navigation();
  }, []);
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
