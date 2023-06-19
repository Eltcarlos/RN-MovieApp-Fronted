import { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import VideoPlayer from "react-native-video-controls";

class VideoPlayerView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer
          source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
          title={this.props.title}
          onBack={() => null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoPlayerView;
