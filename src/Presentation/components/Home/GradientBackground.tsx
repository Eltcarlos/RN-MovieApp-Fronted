import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFade } from "../../hooks/useFade";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {
  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      fadeOut(0);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#ffffff", "#3a4546", "#000000"]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.7 }}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}
      >
        <LinearGradient
          colors={["#ffffff", "#3a4546", "#000000"]}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>

      {children}
    </View>
  );
};
