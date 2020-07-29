import React, {useState} from "react";
import {styles} from "./styles";
import {TextInput, Button, View} from "react-native";


const OfferInputSendButton = ({sendOnPress}) => {
  return (
    <Button
      title="Send"
      onPress={sendOnPress}
    />
  )
}

const OfferInput = ({inputOnPress}) => {
  let [text, setText] = useState("")
  let [definitionIsSet, setDefinitionIsSet] = useState(false)
  return (
    <View style={styles.offerInput}>
      <TextInput
        style={styles.textInput}
        placeholder={definitionIsSet ? "word" : "definition"}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <OfferInputSendButton
        sendOnPress={() =>
          inputOnPress(text, setText, definitionIsSet, setDefinitionIsSet)}
      />
    </View>
  )
}

export default OfferInput;