import {PROJECT_STYLES} from "../../styles";
import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
  ...PROJECT_STYLES,
  loginInput: {
    marginBottom: 10,
    fontFamily: "Roboto",
    fontSize: 30,
    borderBottomWidth: 1.25,
    borderBottomColor: "#A09C98",
    marginTop: 15,
    color: "#4B4845"
  },
  loginInputError: {
    height: 50,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontSize: 30,
    borderBottomWidth: 1.25,
    borderBottomColor: "#FA7268",
    marginTop: 10
  },
  errorText: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#FA7268"
  },
  inputView: {
    // borderBottomWidth: 1.25,
    // borderBottomColor: "#A09C98",
  },
  buttonTitle: {
    fontSize: 48,
    color: "#4B4845",
    zIndex: 4,
  },
  buttonTitleHighlight: {
    position: "absolute"
  },
  shape: {
    zIndex: 1,
    position: "absolute"
  },
  menuButtonContainer: {
    position: "relative",
    alignItems: "center",
  },
  linkText: {
    color: "#FA7268",
    marginTop: 16,
    textDecorationLine: "underline"
  },
  infoText: {
    color: "#4B4845",
    fontSize: 16
  },
  loginNavigateContainer: {
    alignItems: "center",
    marginTop: 40
  },
  line: {
    borderBottomColor: "#A09C98",
    borderBottomWidth: 1.2,
    width: "100%"
  }
  
})
