import React from 'react';
import {Button, Text, View} from "react-native";
import {useProfile} from "./service";


const HomeScreen = ({navigation}) => {
  const user = useProfile()
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button title="Game" onPress={() => navigation.navigate("Game")}/>
      <Button title="Login" onPress={() => navigation.navigate("Login")}/>
    </View>
  )
}

export default HomeScreen
