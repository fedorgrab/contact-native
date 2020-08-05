import {StyleSheet} from "react-native";
import {PROJECT_STYLES} from "../../styles";

export const styles = StyleSheet.create({
  ...PROJECT_STYLES,
  screenContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    display: "flex",
    padding: 32
  },
  contactLogoImage: {},
  orBlock: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  orText: {
    marginLeft: 15,
    marginRight: 15,
    color: "#4B4845"
  },
  signUpContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    minWidth: 250
  },
  linkText: {
    color: "#FA7268",
    marginLeft: 10,
    textDecorationLine: "underline"
  },
  infoText: {
    color: "#4B4845",
    fontSize: 15
  },
  facebookButton: {},
  loginNavigateContainer: {
    alignItems: "center",
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }
})