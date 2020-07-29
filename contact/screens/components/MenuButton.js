import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Text, View, TouchableOpacity} from "react-native";
import {styles} from "./styles";

const OrganicCircleShape = ({color}) => {
  return (
    <Svg fill={color} height={60} width={60}>
      <Path
        d="M42.3496 4.97341C64.584 11.7455 57.4945 33.4319 52.6503 45.6411C47.1517 59.4995 33.2151 65.3244 14.5524 53.089C-3.49937 41.2542 -1.64693 33.101 5.82403 14.7887C12.2086 -0.859306 20.9638 -3.8186 42.3496 4.97341Z"/>
    </Svg>
  )
}

const MenuButton = ({title, onPress}) => {
  return (
    <View style={styles.menuButtonContainer}>
      <OrganicCircleShape color={"#98DDDE"} style={styles.shape}/>
      <TouchableOpacity onPress={onPress} style={styles.buttonTitleHighlight}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuButton;