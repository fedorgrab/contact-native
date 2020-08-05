import React from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import Line from "../../components/Line";

const OrDelimiter = () => (
  <View style={styles.orBlock}>
    <Line/>
    <Text style={styles.orText}>or</Text>
    <Line/>
  </View>
)

export default OrDelimiter;