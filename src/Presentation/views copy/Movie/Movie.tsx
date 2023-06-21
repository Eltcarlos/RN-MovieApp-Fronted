import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieStyles from "./Styles";
import { Video, ResizeMode } from "expo-av";
import { TimeLine } from "../../components/Shared/TimeLine";
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import MovieViewModel from "./ViewModel";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListApp } from "../../navigator/AppNavigation";
import { Tab, TabView } from "react-native-elements";
import styles from "../../components/Movie/Styles";
import TrendingComponent from "../../components/Home/TrendingComponent";

interface Props extends StackScreenProps<RootStackParamListApp, "MovieScreen"> {}

const MovieScreen = ({ navigation, route }: Props) => {
  const { params: item } = useRoute();
  const {
    setIsStarted,
    isStarted,
    videoStatus,
    setVideoStatus,
    video,
    startPauseVideo,
    movie,
    setMovie,
    tabActive,
    setTabActive,
  } = MovieViewModel();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={MovieStyles.container}>
          <Pressable style={MovieStyles.progressContainer} onPress={startPauseVideo}>
            <Video
              ref={video}
              source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
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
          <View style={MovieStyles.timeLine}>
            <TimeLine status={videoStatus} />
          </View>
          <View style={MovieStyles.infoContainer}>
            <Text style={MovieStyles.textTitle}>El club de las cosas Magicas</Text>
          </View>
          <View style={MovieStyles.info}>
            <Text style={MovieStyles.match}>98% match</Text>
            <Text style={MovieStyles.year}>1990</Text>
            <View style={MovieStyles.ageContainer}>
              <Text style={MovieStyles.age}>12+</Text>
            </View>
            <Text style={MovieStyles.year}>9 Seasons</Text>
          </View>
          <View style={MovieStyles.buttonContainer}>
            <Pressable
              style={{ ...MovieStyles.button, backgroundColor: "white" }}
              onPress={() => {
                if (isStarted === true) {
                  setIsStarted(false);
                }
                navigation.navigate("WatchScreen", {});
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
          <Text style={MovieStyles.description}>
            Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos,
            de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que
            enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que
            se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para
            siempre todo lo que a Dom le importa.
          </Text>
          <View style={{ marginLeft: 12 }}>
            <Text style={MovieStyles.year}>Cast: Crish Evans, Leonardo Dicaprio, Emma Stone, Cristopher Nolan</Text>
            <Text style={MovieStyles.year}>Creator: Aaron Korsh</Text>
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
            <TabView.Item>
              <TrendingComponent />
            </TabView.Item>
            <TabView.Item>
              <TrendingComponent />
            </TabView.Item>
          </TabView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
