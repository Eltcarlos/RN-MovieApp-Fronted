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
import LoginStyles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/AuthNavigation";
import useViewModel from "./ViewModel";
import { useFormik } from "formik";
import { LoginValidation } from "../../../utils/validation/UserValidation";
import { LoginAuthUseCase } from "../../../../Domain/useCases/auth/LoginAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/User/User";
interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

const LoginScreen = ({ navigation, route }: Props) => {
  const { showPassword, errorMessage, loading, setLoading, setErrorMessage, onShowPassword, initialValues } =
    useViewModel();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: LoginValidation,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await LoginAuthUseCase(formValue.email, formValue.password);
        if (!response.success) {
          setErrorMessage(response.message);
        } else {
          setLoading(true);
          dispatch(setUser(response.data));
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
                placeholder="Correo electronico"
                autoCapitalize="none"
                onChangeText={(text) => formik.setFieldValue("email", text.toLowerCase())}
                placeholderTextColor={"white"}
                style={LoginStyles.input}
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
                style={LoginStyles.input}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
              />
            </View>

            <Pressable onPress={formik.handleSubmit} style={LoginStyles.button}>
              <Text style={LoginStyles.buttonText}>Sign In</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={LoginStyles.text}>New to MovieApp? Sign up now</Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
