import React from "react";
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, SafeAreaView, Text, View } from "react-native";
import { Input } from "react-native-elements";
import LoginStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/AuthNavigation";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

const LoginScreen = ({ navigation, route }: Props) => {
  const loading = false;
  return (
    <SafeAreaView style={LoginStyles.container}>
      <Image style={LoginStyles.backgroundImg} source={require("../../../../../assets/background.jpg")} />
      <KeyboardAvoidingView style={{ position: "absolute" }}>
        {loading ? (
          <View style={LoginStyles.loadingContainer}>
            <Text style={LoginStyles.loadingText}>Loading</Text>
            <ActivityIndicator size="large" color={"red"} />
          </View>
        ) : (
          <>
            <View style={LoginStyles.logoContainer}>
              <Image
                style={LoginStyles.logo}
                source={{
                  uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                }}
              />
            </View>

            <View style={LoginStyles.formContainer}>
              <Input
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Email"
                placeholderTextColor={"white"}
                style={LoginStyles.input}
              />

              <Input
                secureTextEntry={true}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Password"
                placeholderTextColor={"white"}
                style={LoginStyles.input}
              />
            </View>

            <Pressable onPress={() => {}} style={LoginStyles.button}>
              <Text style={LoginStyles.buttonText}>Sign In</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={LoginStyles.text}>New to Netlfix? Sign up now</Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
