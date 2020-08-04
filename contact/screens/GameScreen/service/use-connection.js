import React, {useEffect} from 'react';
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
