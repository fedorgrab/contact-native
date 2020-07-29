import {UserContext} from "../../../application/context";
import {GameStateContext} from "../context";
import {Button, Text, View} from "react-native";
import React, {useContext} from 'react';

const GameSearchView = ({navigation}) => {
  const {user} = useContext(UserContext)
  const {gameState} = useContext(GameStateContext)
  
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>GameSearch</Text>
      <Text>{user.username}</Text>
      <Text>number of players in room: {gameState.room.number_of_players}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

export default GameSearchView