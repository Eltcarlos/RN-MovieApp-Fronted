import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../views/Auth/Home/Home";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#252525",
          borderTopWidth: 0,
        },
        tabBarIcon: (props) => tabIcon({ route, ...props }),
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, title: "Inicio" }} />
      <Tab.Screen name="Download" component={HomeScreen} options={{ headerShown: false, title: "Descargas" }} />
    </Tab.Navigator>
  );
};

export default MainTab;

function tabIcon(props: any) {
  const { route, size, color, focused } = props;
  let iconName = "plus";
  if (route.name === "HomeScreen") {
    iconName = focused ? "home" : "home-outline";
  }
  if (route.name === "Download") {
    iconName = focused ? "download" : "download-outline";
  }
  return <Icon type="material-community" name={iconName} size={size} color={color} />;
}
