import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { ResizeMode, Video } from "expo-av";
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WatchStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListApp } from "../../navigator/AppNavigation";
import useViewModel from "./ViewModel";
import socket from "../../utils/Socket/SocketIO";
import { useSelector } from "react-redux";
import { Slider } from "react-native-elements";

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
  const {
    showView,
    video,
    isPlaying,
    currentTime,
    totalDuration,
    setTotalDuration,
    setCurrentTime,
    setIsPlaying,
    setShowView,
  } = useViewModel(item, user);

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

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  const handlePlaybackStatusUpdate = (status: any) => {
    setCurrentTime(status.positionMillis || 0);
    setTotalDuration(status.durationMillis || 0);
  };

  const handleSliderValueChange = (value: any) => {
    setCurrentTime(value);
    video.current.setPositionAsync(value);
  };

  const handleSliderSlidingComplete = (value: any) => {
    setCurrentTime(value);
    video.current.setPositionAsync(value);
  };

  const handlePlay = async () => {
    await video.current.playAsync();
    setIsPlaying(true);
  };

  const handlePause = async () => {
    await video.current.pauseAsync();
    setIsPlaying(false);
  };

  const handleSkipRight = async () => {
    const newPosition = currentTime + 10000; // Avanza 10 segundos (10000 milisegundos)
    video.current.setPositionAsync(newPosition);
    setCurrentTime(newPosition);
  };

  const handleSkipLeft = async () => {
    const newPosition = currentTime - 10000; // Avanza 10 segundos (10000 milisegundos)
    video.current.setPositionAsync(newPosition);
    setCurrentTime(newPosition);
  };

  return (
    <SafeAreaView style={WatchStyles.container}>
      {showView && (
        <Pressable onPress={toggleControls}>
          <StatusBar hidden={true} />
          <Video
            ref={video}
            source={{ uri: item.video }}
            style={{ height: "100%", width: "100%" }}
            isLooping
            shouldPlay={showView}
            resizeMode={ResizeMode.STRETCH}
            positionMillis={item.position || 0}
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          />

          {showControls && (
            <View style={WatchStyles.controls}>
              <Header title={item.title} />
              <View style={WatchStyles.actions}>
                <Pressable onPress={handleSkipLeft}>
                  <MaterialCommunityIcons name="rotate-left" size={50} color="white" />
                  <Text style={WatchStyles.textRotate}>10</Text>
                </Pressable>
                <View style={WatchStyles.actionSeparator} />
                {isPlaying ? (
                  <Ionicons name="pause" size={90} color="white" onPress={handlePause} />
                ) : (
                  <Entypo name="controller-play" size={90} color="white" onPress={handlePlay} />
                )}
                <View style={WatchStyles.actionSeparator} />
                <Pressable onPress={handleSkipRight}>
                  <MaterialCommunityIcons name="rotate-right" size={50} color="white" />
                  <Text style={WatchStyles.textRotate}>10</Text>
                </Pressable>
              </View>
              <View style={WatchStyles.timeLine}>
                <Slider
                  style={WatchStyles.slider}
                  minimumValue={0}
                  maximumValue={totalDuration}
                  value={currentTime}
                  onValueChange={handleSliderValueChange}
                  onSlidingComplete={handleSliderSlidingComplete}
                  trackStyle={{ height: 5, backgroundColor: "transparent" }}
                  thumbStyle={{ height: 20, width: 20, backgroundColor: "red" }}
                  minimumTrackTintColor="red"
                />
              </View>
            </View>
          )}
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default Watch;
