import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/Presentation/navigator/RootNavigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/Presentation/store/store";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading</Text>
      <ActivityIndicator size="large" color={"red"} />
    </View>
  );
}

export default function App() {
  useEffect(() => {
    async function Navigation() {
      await NavigationBar.setBackgroundColorAsync("black");
    }
    Navigation();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  loadingText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
