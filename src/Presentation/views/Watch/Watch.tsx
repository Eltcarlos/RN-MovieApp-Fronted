import React, { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import VideoPlayer from "expo-video-player";
import { ResizeMode } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WatchStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListApp } from "../../navigator/AppNavigation";

const Header = ({ title }: any) => {
  const navigation = useNavigation();
  const exit = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    await NavigationBar.setVisibilityAsync("visible");

    navigation.goBack();
  };
  return (
    <View style={WatchStyles.headerContainer}>
      <AntDesign name="left" size={24} color="white" onPress={exit} />
      <View style={WatchStyles.headerSeparator} />
      <Text style={WatchStyles.headerText}>{title}</Text>
    </View>
  );
};

interface Props extends StackScreenProps<RootStackParamListApp, "WatchScreen"> {}
const Watch = ({ navigation, route }: Props) => {
  const [showView, setShowView] = useState(false);
  const item: any = route.params;
  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
      setShowView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function NavigationBarScreen() {
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBackgroundColorAsync("black");
    }
    NavigationBarScreen();
  }, []);

  useEffect(() => {
    async function changeScreenOrientation() {
      const orientations = await ScreenOrientation.getOrientationAsync();
      if (orientations !== 3) {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      }
    }
    changeScreenOrientation();
  }, []);

  return (
    <SafeAreaView style={WatchStyles.container}>
      <StatusBar hidden={true} />
      {showView && (
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.COVER,
            source: {
              uri: item.video,
            },
          }}
          style={{
            videoBackgroundColor: "black",
            height: Dimensions.get("window").height - 20,
            width: Dimensions.get("window").width,
          }}
          fullscreen={{
            visible: false,
          }}
          header={<Header title={item.title} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Watch;
