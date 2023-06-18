import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../views/Auth/Home/Home";

export type RootStackParamListApp = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamListApp>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
