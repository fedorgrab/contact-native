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
  finishReasonMessage: "",
  finishModalVisible: false,
  offerToSend: {definition: ""},
}

function gameReducer(state, action) {
  switch (action.event) {
    case "start":
      return {...state, room: action.room}
    case "continue":
      return {...state, room: action.room, offers: action.room.offers}
    default:
      return {...state, room: action.room, offers: action.room.offers}
  }
}


function gameScreenReducer(state, action) {
  switch (action.type) {
    case "wordModalVisible":
      return {...state, wordModalVisible: !state.wordModalVisible}
    case "changeView":
      return {...state, view: action.view}
    case "offerCancelModalVisible":
      return {
        ...state,
        offerCancelModalVisible: !state.offerCancelModalVisible,
        offerToCancel: action.offerId ? action.offerId : null
      }
    case "contactAttemptModalVisible":
      return {
        ...state,
        contactAttemptModalVisible: !state.contactAttemptModalVisible,
        offerToAccept: action.offerId ? action.offerId : null
      }
    case "showErrorModal":
      return {
        ...state,
        errorModalVisible: true,
        errorMessage: action.errorMessage ? action.errorMessage : null
      }
    case "hideErrorModal":
      return {...state, errorModalVisible: false}
    case "setDefinitionToSend":
      return {...state, offerToSend: {definition: action.definition}}
    case "finishModalVisible":
      return {...state, finishModalVisible: true, finishReasonMessage: action.message}
    case "hideFinishModal":
      return {...state, finishModalVisible: false, finishReasonMessage: ""}
    default:
      throw new Error();
  }
}

export function useGameReducer() {
  return useReducer(gameReducer, gameInitialState)
}

export function useGameScreenReducer() {
  return useReducer(gameScreenReducer, gameScreenInitialState)
}