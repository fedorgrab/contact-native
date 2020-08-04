import communicator from "../communicator";
import {GAME_EVENT} from "../events";


export function contactAttemptOnTouch(offer, gameScreenDispatch) {
  gameScreenDispatch({type: "contactAttemptModalVisible", offerId: offer.id_key})
}

export function contactAttemptModalOnTouch(offerId, estimatedWord, gameScreenDispatch) {
  communicator.performAction(
    GAME_EVENT.CONTACT, {offer_id: offerId, estimated_word: estimatedWord}
  )
  gameScreenDispatch({type: "contactAttemptModalVisible"})
}

export function offerSendButtonOnPress(text, setText, definitionIsSet, setDefinitionIsSet, gameScreenDispatch, definition) {
  if (!definitionIsSet) {
    gameScreenDispatch({type: "setDefinitionToSend", definition: text})
    setDefinitionIsSet(true)
    setText("")
  } else {
    communicator.performAction(GAME_EVENT.OFFER, {definition, answer: text})
    setText("")
    setDefinitionIsSet(false)
  }
}