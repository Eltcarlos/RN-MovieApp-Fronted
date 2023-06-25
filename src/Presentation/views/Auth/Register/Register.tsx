import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import RegisterStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/AuthNavigation";
import useViewModel from "./ViewModel";
import { useFormik } from "formik";
import { RegisterValidation } from "../../../utils/validation/UserValidation";
import { SignUpAuthUseCase } from "../../../../Domain/useCases/auth/RegisterAuth";

interface Props extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

const RegisterScreen = ({ navigation, route }: Props) => {
  const { showPassword, errorMessage, loading, setLoading, setErrorMessage, onShowPassword, initialValues } =
    useViewModel();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: RegisterValidation,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await SignUpAuthUseCase(formValue.name, formValue.email, formValue.password);
        if (!response.success) {
          setErrorMessage(response.message);
        } else {
          setLoading(true);
          navigation.navigate("LoginScreen");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);
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
            <View style={RegisterStyles.logoContainer}></View>

            <View style={RegisterStyles.formContainer}>
              <Input
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Nombre"
                autoCapitalize="none"
                onChangeText={(text) => formik.setFieldValue("name", text.toLowerCase())}
                placeholderTextColor={"white"}
                style={RegisterStyles.input}
                errorMessage={formik.errors.name}
              />
              <Input
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Correo electronico"
                autoCapitalize="none"
                onChangeText={(text) => formik.setFieldValue("email", text.toLowerCase())}
                placeholderTextColor={"white"}
                style={RegisterStyles.input}
                errorMessage={formik.errors.email}
              />
              <Input
                secureTextEntry={!showPassword}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Contraseña"
                rightIcon={{
                  type: "material-community",
                  color: "white",
                  name: showPassword ? "eye-off-outline" : "eye-outline",
                  onPress: onShowPassword,
                }}
                rightIconContainerStyle={{ position: "absolute", right: 10 }}
                placeholderTextColor={"white"}
                style={RegisterStyles.input}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
              />
            </View>

            <Pressable onPress={formik.handleSubmit} style={RegisterStyles.button}>
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
