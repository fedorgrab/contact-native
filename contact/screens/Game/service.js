import React, {useEffect, useReducer} from 'react';
import communicator from "./communicator";


export function useConnection() {
  useEffect(() => {
    communicator.openGameConnection()
    return () => communicator.closeGameConnection()
  }, []);
}

export function useGameEvent(gameActionHandlerCallback, gameErrorHandlerCallback) {
  useEffect(() => {
    const actionCallback = (gameEvent, gameObj) => gameActionHandlerCallback(gameEvent, gameObj)
    const errorCallback = (errorType, errorMessage) => gameErrorHandlerCallback(errorType, errorMessage)
    communicator.connectionOnMessage(actionCallback, errorCallback)
  }, [])
}


const gameInitialState = {
  room: {},
  offers: [],
  contact: null,
}
const gameScreenInitialState = {
  view: "SearchView",
  offerToAccept: null,
  wordModalVisible: false,
  offerCancelModalVisible: false,
  contactAttemptModalVisible: false,
  errorModalVisible: false,
  errorModalMessage: "",
  offerToSend: {definition: ""},
}

function gameReducer(state, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.event) {
    case "start":
      newState.room = action.room
      break
    case "continue":
      newState.room = action.room
      newState.offers = action.room.offers
      break
    default:
      newState.room = action.room
      newState.offers = action.room.offers
  }
  return newState
}


function gameScreenReducer(state, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case "wordModalVisible":
      newState.wordModalVisible = !state.wordModalVisible
      break
    case "changeView":
      newState.view = action.view
      break
    case "offerCancelModalVisible":
      newState.offerCancelModalVisible = !state.offerCancelModalVisible
      newState.offerToCancel = action.offerId ? action.offerId : null
      break
    case "contactAttemptModalVisible":
      newState.contactAttemptModalVisible = !state.contactAttemptModalVisible
      newState.offerToAccept = action.offerId ? action.offerId : null
      break
    case "showErrorModal":
      if (action.errorMessage) newState.errorModalMessage = action.errorMessage
      newState.errorModalVisible = true
      break
    case "hideErrorModal":
      newState.errorModalVisible = false
      break
    case "setDefinitionToSend":
      newState.offerToSend.definition = action.definition
      break
    default:
      throw new Error();
  }
  return newState
}

export function useGameReducer() {
  return useReducer(gameReducer, gameInitialState)
}

export function useGameScreenReducer() {
  return useReducer(gameScreenReducer, gameScreenInitialState)
}