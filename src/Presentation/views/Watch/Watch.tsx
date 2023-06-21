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

const Header = () => {
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
      <Text style={WatchStyles.headerText}>Designated Survivor</Text>
    </View>
  );
};

const Watch = () => {
  const [showView, setShowView] = useState(false);

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
      console.log(orientations);
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
            resizeMode: ResizeMode.STRETCH,
            source: {
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
          header={<Header />}
        />
      )}
    </SafeAreaView>
  );
};

export default Watch;
