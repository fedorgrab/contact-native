import React from "react";
import {Modal, Text, TouchableHighlight, View} from "react-native";
import {styles} from "./styles";


const InfoModal = ({title, modalVisible, modalOnTouch}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: "#2196F3"}}
            onPress={modalOnTouch}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export default InfoModal;