import {styles} from "./styles";
import {TextInput, View, Text} from "react-native";
import React from "react";


const TextField = ({text, setText, placeholder, validErrorText, password = false}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={validErrorText ? styles.loginInputError : styles.loginInput}
        placeholder={placeholder}
        onChangeText={text => setText(text)}
        defaultValue={text}
        secureTextEntry={password}
        keyboardType={password ? "default" : "email-address"}
        autoCapitalize={"none"}
      />
      {validErrorText ? <Text style={styles.errorText}>{validErrorText}</Text> : <></>}
      {validErrorText ? <></> : <Text style={styles.errorText}>{" "}</Text>}
    </View>
  )
}

export default TextField