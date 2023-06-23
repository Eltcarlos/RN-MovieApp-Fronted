import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import VideoPlayer from "expo-video-player";
import { ResizeMode, Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WatchStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListApp } from "../../navigator/AppNavigation";
import useViewModel from "./ViewModel";
import socket from "../../utils/Socket/SocketIO";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";

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
  const item: any = route.params;
  const user = useSelector((store: any) => store.user);
  const [showControls, setShowControls] = useState(true);
  const { showView, video, setShowView } = useViewModel(item, user);

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

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () => {
      console.log("EVENTO: beforeRemove");
      socket.disconnect();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showControls) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showControls]);

  const handlePlayPause = async () => {
    if (video.current) {
      await video.current.playAsync();
    }
  };

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <SafeAreaView style={WatchStyles.container}>
      <Pressable onPress={toggleControls}>
        <StatusBar hidden={true} />
        {showView && (
          <Video
            ref={video}
            source={{ uri: item.video }}
            style={{ height: "100%", width: "100%" }}
            isLooping
            shouldPlay={showView}
            resizeMode={ResizeMode.STRETCH}
          />
        )}
        {showControls && (
          <View style={WatchStyles.controls}>
            <Header title={item.title} />
            <View style={WatchStyles.actions}>
              <Button title="Play" onPress={handlePlayPause} />
            </View>
          </View>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default Watch;
