import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../views/Home/Home";
import MovieScreen from "../views/Movie/Movie";
import WatchScreen from "../views/Watch/Watch";
import SearchScreen from "../views/Search/Search";
import { NotificationPush } from "../utils/NotificationPush/NotificationPush";
import * as Notifications from "expo-notifications";
import { useSelector } from "react-redux";
import { UpdateNotificationTokenUserUseCase } from "../../Domain/useCases/user/UpdateNotification";

export type RootStackParamListApp = {
  HomeScreen: undefined;
  MovieScreen: undefined;
  WatchScreen: undefined;
  SearchScreen: undefined;
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator<RootStackParamListApp>();

const AppNavigation = () => {
  const user = useSelector((store: any) => store.user);
  const { notification, notificationListener, responseListener, setNotification, registerForPushNotificationsAsync } =
    NotificationPush();

  const updateNotificationToken = async (id: string, token: string) => {
    await UpdateNotificationTokenUserUseCase(id, token);
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => {
      updateNotificationToken(user.id, token);
    });

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
