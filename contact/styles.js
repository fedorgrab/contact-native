import {StyleSheet} from "react-native";


export const PROJECT_STYLES = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily:"Roboto",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput: {
    width: 150,
    height: 50,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 2
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  }
}

export const styles = StyleSheet.create(PROJECT_STYLES)
