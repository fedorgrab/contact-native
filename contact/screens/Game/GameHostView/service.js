import communicator from "../communicator";
import {GAME_EVENT} from "../events";

export function wordModalOnTouch(word, gameScreenDispatch) {
  gameScreenDispatch({type: "wordModalVisible"})
  communicator.performAction(GAME_EVENT.WORD, {word: word})
}

export function cancelOfferOnTouch(offer, gameScreenDispatch) {
  gameScreenDispatch({type: "offerCancelModalVisible", offerId: offer.id_key})
}

export function cancelOfferModalOnTouch(offerId, estimatedWord, gameScreenDispatch) {
  communicator.performAction(
    GAME_EVENT.CANCEL, {offer_id: offerId, estimated_word: estimatedWord}
  )
  gameScreenDispatch({type: "offerCancelModalVisible"})
}