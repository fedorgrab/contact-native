import React, {useContext} from 'react';
import {Button, Text, View} from "react-native";
import {UserContext} from "../../../application/context";
import {GameScreenContext, GameStateContext} from "../context";
import OfferList from "../components/OfferList";
import InputModal from "../components/InputModal";
import OfferInput from "../components/OfferInput";
import {
  contactAttemptOnTouch,
  contactAttemptModalOnTouch,
  offerSendButtonOnPress
} from "./service";


const GamePlayerView = ({navigation}) => {
  const {user} = useContext(UserContext)
  const {gameState} = useContext(GameStateContext)
  const {gameScreenState, gameScreenDispatch} = useContext(GameScreenContext)
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Game Player View</Text>
      <Text>{user.username}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')}/>
      <Text>{gameState.room.open_word}</Text>
      <InputModal
        title={"Contact Attempt"}
        modalVisible={gameScreenState.contactAttemptModalVisible}
        modalOnTouch={(estimatedWord) =>
          contactAttemptModalOnTouch(gameScreenState.offerToAccept, estimatedWord, gameScreenDispatch)}
      />
      <OfferList
        offers={gameState.offers}
        actionOnTouch={(offer) => contactAttemptOnTouch(offer, gameScreenDispatch)}
        actionTitle={"Contact!"}
        user={user}
      />
      <OfferInput inputOnPress={(text, setText, definitionIsSet, setDefinitionIsSet) =>
        offerSendButtonOnPress(text, setText, definitionIsSet, setDefinitionIsSet, gameScreenDispatch, gameScreenState.offerToSend.definition)}/>
    </View>
  )
}

export default GamePlayerView