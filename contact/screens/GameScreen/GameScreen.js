import React, {useContext} from 'react';
import {UserContext} from "../../application/context";
import {GameStateContext, GameScreenContext,} from "./context";
import GameSearchView from "./GameSearchView/GameSearchView";
import GameHostView from "./GameHostView/GameHostView";
import GamePlayerView from "./GamePlayerView/GamePlayerView";
import InfoModal from "./components/InfoModal";
import {useGameReducer, useGameScreenReducer} from "./service/reducers";
import {handleGameErrors, handleGameEvents} from "./service/event-handler";
import {useConnection, useGameEvent} from "./service/use-connection";


const GAME_VIEW_MAPPING = {
  "SearchView": GameSearchView,
  "GameHost": GameHostView,
  "GamePlayer": GamePlayerView
}

const GameScreen = ({navigation}) => {
  const {user} = useContext(UserContext)
  const [gameState, gameStateDispatch] = useGameReducer()
  const [gameScreenState, gameScreenDispatch] = useGameScreenReducer()
  
  useConnection()
  useGameEvent(
    (event, room) => handleGameEvents(event, room, user, gameStateDispatch, gameScreenDispatch),
    (errorType, errorMessage) => handleGameErrors(errorType, errorMessage, gameScreenDispatch)
  )
  
  return (
    <GameScreenContext.Provider value={{gameScreenState, gameScreenDispatch}}>
      <GameStateContext.Provider value={{gameState, gameStateDispatch}}>
        {React.createElement(GAME_VIEW_MAPPING[gameScreenState.view], {navigation})}
        <InfoModal
          title={gameScreenState.errorModalMessage}
          modalVisible={gameScreenState.errorModalVisible}
          modalOnTouch={() => gameScreenDispatch({type: "hideErrorModal"})}
        />
        <InfoModal
          title={gameScreenState.finishReasonMessage}
          modalVisible={gameScreenState.finishModalVisible}
          modalOnTouch={() => {
            gameScreenDispatch({type: "hideFinishModal"})
            navigation.reset({index: 0, routes: [{name: "Home"}]})
          }}
        />
      </GameStateContext.Provider>
    </GameScreenContext.Provider>
  )
}

export default GameScreen;