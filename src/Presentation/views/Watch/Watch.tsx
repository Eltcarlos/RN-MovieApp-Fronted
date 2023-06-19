import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WatchStyles from "./Styles";

const WatchScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [isStarted, setIsStarted] = useState(false);
  const [videoStatus, setVideoStatus] = useState(0);
  const video = useRef(null);
  const startPauseVideo = () => setIsStarted((prevState) => !prevState);

  useEffect(() => {
    if (isFocused) {
      navigation.setOptions({ tabBarVisible: false });
    }
  }, [isFocused, navigation]);
  return (
    <View style={WatchStyles.container}>
      <Pressable style={WatchStyles.container} onPress={startPauseVideo}>
        <Video
          ref={video}
          source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
          style={WatchStyles.video}
          resizeMode={ResizeMode.STRETCH}
          isLooping
          shouldPlay={isStarted}
          onPlaybackStatusUpdate={(status: any) => setVideoStatus(status)}
        />
      </Pressable>
    </View>
  );
};

export default WatchScreen;
