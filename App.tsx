import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/Presentation/navigator/RootNavigation";
import { ThemeProvider } from "react-native-elements";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/Presentation/store/store";
import { lightTheme } from "./src/Presentation/utils/theme/LightTheme";
import { darkTheme } from "./src/Presentation/utils/theme/DarkTheme";

export default function App() {
  // const { darkMode } = useSelector((state: any) => state.theme);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
