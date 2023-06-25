import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./tabs/MainTab";
import HomeScreen from "../views/Home/Home";
import MovieScreen from "../views/Movie/Movie";
import WatchScreen from "../views/Watch/Watch";
import SearchScreen from "../views/Search/Search";

export type RootStackParamListApp = {
  HomeScreen: undefined;
  MovieScreen: undefined;
  WatchScreen: undefined;
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamListApp>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="WatchScreen" component={WatchScreen} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
