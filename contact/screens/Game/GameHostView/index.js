import React, {useContext} from 'react';
import {Button, Text, View} from "react-native";
import {UserContext} from "../../../application/context";
import {GameStateContext, GameScreenContext} from "../context";
import InputModal from "../components/InputModal";
import OfferList from "../components/OfferList";
import {wordModalOnTouch, cancelOfferOnTouch, cancelOfferModalOnTouch} from "./service";


const GameHostView = ({navigation}) => {
  const {user} = useContext(UserContext)
  const {gameState} = useContext(GameStateContext)
  const {gameScreenState, gameScreenDispatch} = useContext(GameScreenContext)
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Game Host View</Text>
      {gameState.room.open_word ? <></> : <Text style={{fontSize: 30}}>You are a game host!</Text>}
      <Text>{user.username}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')}/>
      <InputModal
        title={"Think of a word!"}
        modalVisible={gameScreenState.wordModalVisible}
        modalOnTouch={(word) => wordModalOnTouch(word, gameScreenDispatch)}
      />
      <InputModal
        title={"Cancel contact attempt"}
        modalVisible={gameScreenState.offerCancelModalVisible}
        modalOnTouch={(estimatedWord) =>
          cancelOfferModalOnTouch(gameScreenState.offerToCancel, estimatedWord, gameScreenDispatch)}
      />
      <Text>{gameState.room.open_word}</Text>
      <OfferList
        offers={gameState.offers}
        actionOnTouch={(offer) => cancelOfferOnTouch(offer, gameScreenDispatch)}
        actionTitle={"Cancel"}
        user={user}
      />
    </View>
  )
}

export default GameHostView