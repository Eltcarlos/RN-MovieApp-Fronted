import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { RootStackParamListApp } from "../../navigator/AppNavigation";
import { Video, ResizeMode } from "expo-av";

import { SafeAreaView } from "react-native-safe-area-context";
import MovieStyles from "./Styles";
import useViewModel from "./ViewModel";
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tab, TabView } from "react-native-elements";

interface Props extends StackScreenProps<RootStackParamListApp, "MovieScreen"> {}
const MovieScreen = ({ navigation, route }: Props) => {
  const item: any = route.params;
  const {
    video,
    isStarted,
    tabActive,
    showLines,
    openCloseDescription,
    setTabActive,
    setVideoStatus,
    startPauseVideo,
    setIsStarted,
  } = useViewModel();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={MovieStyles.container}>
          <Pressable style={MovieStyles.progressContainer} onPress={startPauseVideo}>
            <Video
              ref={video}
              source={{ uri: item.advance }}
              style={MovieStyles.progress}
              resizeMode={ResizeMode.STRETCH}
              isLooping
              shouldPlay={isStarted}
              onPlaybackStatusUpdate={(status: any) => setVideoStatus(status)}
            />
            <View style={MovieStyles.progressView}>
              <Text style={MovieStyles.progressText}>Avance</Text>
              <View style={{ paddingHorizontal: 130 }} />
              {!isStarted && (
                <MaterialCommunityIcons style={MovieStyles.progressIcon} name="volume-mute" size={20} color="white" />
              )}
            </View>
          </Pressable>
          <View style={MovieStyles.infoContainer}>
            <Text style={MovieStyles.textTitle}>{item.title}</Text>
            <View style={MovieStyles.info}>
              <Text style={MovieStyles.match}>98% match</Text>
              <Text style={MovieStyles.year}>1990</Text>
              {item.age && (
                <View style={MovieStyles.ageContainer}>
                  <Text style={MovieStyles.age}>{item.age}+</Text>
                </View>
              )}
              <View style={MovieStyles.hdContainer}>
                <Text style={MovieStyles.age}>HD</Text>
              </View>
            </View>
            <View style={MovieStyles.buttonContainer}>
              <Pressable
                style={{ ...MovieStyles.button, backgroundColor: "white" }}
                onPress={() => {
                  if (isStarted === true) {
                    setIsStarted(false);
                  }
                  navigation.navigate("WatchScreen", { title: item.title, video: item.video });
                }}
              >
                <Entypo name="controller-play" size={24} color="black" />
                <Text style={{ fontSize: 17, fontWeight: "500", color: "black" }}>Ver</Text>
              </Pressable>
              <View style={{ paddingVertical: 5 }} />
              <View style={{ ...MovieStyles.button, backgroundColor: "#252525" }}>
                <FontAwesome name="download" size={24} color="white" style={{ paddingHorizontal: 5 }} />
                <Text style={{ fontSize: 17, fontWeight: "500", color: "white" }}>Descargar</Text>
              </View>
            </View>
            <Text style={MovieStyles.description}>{item.plot}</Text>
            <View style={{ marginLeft: 12 }}>
              <Text numberOfLines={showLines} style={{ ...MovieStyles.year, paddingRight: 50 }}>
                Cast: {item.cast}
              </Text>
              <Text
                style={{
                  ...MovieStyles.loadMore,
                  color: "white",
                  position: "absolute",
                  right: 10,
                  fontSize: 13,
                  top: 1,
                }}
                onPress={openCloseDescription}
              >
                {showLines === 1 ? "Ver más" : "Ocultar"}
              </Text>
              <Text style={MovieStyles.year}>Creator: {item.director}</Text>
            </View>
            <View style={MovieStyles.actions}>
              <View>
                <AntDesign style={{ textAlign: "center" }} name="plus" size={24} color="white" />
                <Text style={{ fontSize: 12, color: "white", marginTop: 3 }}>My List</Text>
              </View>
              <View>
                <FontAwesome style={{ textAlign: "center" }} name="thumbs-o-up" size={24} color="white" />
                <Text style={{ fontSize: 12, color: "white", marginTop: 3 }}>Calificar</Text>
              </View>
              <View>
                <Entypo style={{ textAlign: "center" }} name="share" size={24} color="white" />
                <Text style={{ fontSize: 12, color: "white", marginTop: 3 }}>Compartir</Text>
              </View>
              <View>
                <FontAwesome name="download" style={{ textAlign: "center" }} size={24} color="white" />
                <Text style={{ fontSize: 12, color: "white", marginTop: 3 }}>Download</Text>
              </View>
            </View>
            <Tab value={tabActive} onChange={(e) => setTabActive(e)} indicatorStyle={MovieStyles.tabIndicator}>
              <Tab.Item
                containerStyle={MovieStyles.tabItemContainer}
                title="SIMILARES"
                titleStyle={{ fontSize: 12, fontWeight: "bold", color: "white" }}
              />
              <Tab.Item
                containerStyle={MovieStyles.tabItemContainer}
                title="TRÁILERES Y MÁS"
                titleStyle={{ fontSize: 12, fontWeight: "bold", color: "white" }}
              />
            </Tab>
            <TabView value={tabActive} onChange={setTabActive} animationType="timing">
              <TabView.Item>{/* <TrendingComponent /> */}</TabView.Item>
              <TabView.Item>{/* <TrendingComponent /> */}</TabView.Item>
            </TabView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
