import React from "react";
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, SafeAreaView, Text, View } from "react-native";
import { Input } from "react-native-elements";
import RegisterStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/AuthNavigation";

interface Props extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

const RegisterScreen = ({ navigation, route }: Props) => {
  const loading = false;
  return (
    <SafeAreaView style={RegisterStyles.container}>
      <Image style={RegisterStyles.backgroundImg} source={require("../../../../../assets/background.jpg")} />
      <KeyboardAvoidingView style={{ position: "absolute" }}>
        {loading ? (
          <View style={RegisterStyles.loadingContainer}>
            <Text style={RegisterStyles.loadingText}>Loading</Text>
            <ActivityIndicator size="large" color={"red"} />
          </View>
        ) : (
          <>
            <View style={RegisterStyles.logoContainer}>
              <Image
                style={RegisterStyles.logo}
                source={{
                  uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                }}
              />
            </View>

            <View style={RegisterStyles.formContainer}>
              <Input
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Email"
                placeholderTextColor={"white"}
                style={RegisterStyles.input}
              />

              <Input
                secureTextEntry={true}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Password"
                placeholderTextColor={"white"}
                style={RegisterStyles.input}
              />
            </View>

            <Pressable onPress={() => {}} style={RegisterStyles.button}>
              <Text style={RegisterStyles.buttonText}>Register</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={RegisterStyles.text}>Back to Login</Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
