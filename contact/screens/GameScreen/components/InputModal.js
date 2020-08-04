import React, {useState} from "react";
import {Modal, Text, TextInput, TouchableHighlight, View} from "react-native";
import {styles} from "./styles";


const InputModal = ({title, modalVisible, modalOnTouch}) => {
  const [word, setWord] = useState("")
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="word"
            onChangeText={word => setWord(word)}
          />
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: "#2196F3"}}
            onPress={() => modalOnTouch(word)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export default InputModal