import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";

const AuthNavigationBlock = ({onTouchCallback, infoText, linkText}) => {
  return (
    <View style={styles.loginNavigateContainer}>
      <Text style={styles.infoText}>{infoText}</Text>
      <TouchableOpacity onPress={onTouchCallback}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthNavigationBlock;