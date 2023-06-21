import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  loadingText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
    width: 120,
    marginTop: 20,
  },
  formContainer: {
    width: 320,
    marginTop: 45,
  },
  input: {
    width: 330,
    padding: 15,
    borderRadius: 5,
    color: "white",
    backgroundColor: "gray",
  },
  button: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 14,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "700",
    color: "white",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 19,
    fontWeight: "600",
    marginTop: 15,
  },
});

export default LoginStyles;
