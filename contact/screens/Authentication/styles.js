import {StyleSheet} from "react-native";
import {PROJECT_STYLES} from "../../styles";

export const styles = StyleSheet.create({
  ...PROJECT_STYLES,
  screenContainer: {
    alignItems: "center"
  },
  contactLogoImage: {
    top: 20,
    // position: "absolute"
  },
  signUpContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    justifyContent: "space-between",
    minWidth:250
  },
  linkText: {
    color: "#FA7268",
    marginTop: 15,
    textDecorationLine: "underline"
  },
  infoText: {
    color: "#4B4845",
    fontSize: 15
  },
  loginNavigateContainer: {
    alignItems: "center",
    marginTop: 40
  }
})