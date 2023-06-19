import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

interface props {
  status: any;
}

export function TimeLine({ status }: props) {
  const totalTime = status.playableDurationMillis;
  const currenTime = status.positionMillis;

  const currentPercentaje = (currenTime * 100) / totalTime;

  const lineStyle = {
    width: `${currentPercentaje}%`,
  };

  return <View style={[styles.content, lineStyle]} />;
}

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    bottom: 50,
    left: 0,
    height: 3,
    backgroundColor: "red",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
});
