import React, {useContext} from 'react';
import {useGameReducer, useGameScreenReducer} from "./service";
import {useConnection, useGameEvent} from "./service";
import {UserContext} from "../../application/context";
import {GameStateContext, GameScreenContext,} from "./context";
import GameSearchView from "./GameSearch";
import GameHostView from "./GameHostView";
import GamePlayerView from "./GamePlayerView";
import InfoModal from "./components/InfoModal";
import {handleGameErrors, handleGameEvents} from "./event-handler";


const GAME_VIEW_MAPPING = {
  "SearchView": GameSearchView,
  "GameHost": GameHostView,
  "GamePlayer": GamePlayerView
}

const Game = ({navigation}) => {
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
      </GameStateContext.Provider>
    </GameScreenContext.Provider>
  )
}

export default Game;