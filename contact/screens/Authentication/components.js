import React, {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

export const LinkAuthNavigationButton = ({infoText, onPress, title}) => {
  return (
    <View style={styles.loginNavigateContainer}>
      <Text style={styles.infoText}>{infoText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}