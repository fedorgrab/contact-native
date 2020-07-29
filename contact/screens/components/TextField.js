import {styles} from "./styles";
import {TextInput, View} from "react-native";
import React from "react";


const TextField = ({text, setText, placeholder, error, password = false}) => {
  return (
    <View style={setText.inputView}>
      <TextInput
        style={error ? styles.loginInputError : styles.loginInput}
        placeholder={placeholder}
        onChangeText={text => setText(text)}
        defaultValue={text}
        secureTextEntry={password}
        keyboardType={password ? "default" : "email-address"}
        autoCapitalize={"none"}
      />
    </View>
  )
}

export default TextField