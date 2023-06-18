import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./tabs/MainTab";

export type RootStackParamListApp = {
  MainTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamListApp>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
