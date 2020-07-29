import {PROJECT_STYLES} from "../../styles";
import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
  ...PROJECT_STYLES,
  loginInput: {
    height: 50,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontSize: 30,
    borderBottomWidth: 1.25,
    borderBottomColor: "#A09C98",
    marginTop: 25,
    color: "#4B4845"
  },
  loginInputError: {
    height: 50,
    marginBottom: 10,
    fontFamily: "Roboto",
    fontSize: 30,
    borderBottomWidth: 1.25,
    borderBottomColor: "#FA7268",
    marginTop: 25
  },
  inputView: {
    borderBottomWidth: 2,
    borderBottomColor: "#A09C98",
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
    marginTop: 40,
  },
})