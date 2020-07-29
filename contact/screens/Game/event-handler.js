import {GAME_EVENT} from "./events";
import server from "../../server";

let gameStateDispatch
let gameScreenDispatch

const setUpView = (room, user) => {
  const isGameHost = room.game_host_key === user.username
  const view = isGameHost ? "GameHost" : "GamePlayer"
  gameScreenDispatch({type: "changeView", view})
  if (isGameHost && !room.game_is_started) gameScreenDispatch({type: "wordModalVisible"})
}

function startGameEvent(event, room, user) {
  gameStateDispatch({event, room})
  if (room.is_full) setUpView(room, user)
}


export function handleGameEvents(event, room, user, gameStateDispatchCallback, gameScreenDispatchCallback) {
  gameStateDispatch = gameStateDispatchCallback
  gameScreenDispatch = gameScreenDispatchCallback
  
  switch (event) {
    case GAME_EVENT.START:
      return startGameEvent(event, room, user)
    case GAME_EVENT.CONTINUE:
      return startGameEvent(event, room, user)
    default:
      return gameStateDispatch({event, room})
  }
}

export function handleGameErrors(errorType, errorMessage, gameScreenDispatch) {
  if (errorType === "action") {
    gameScreenDispatch({type: "showErrorModal", errorMessage})
  } else {
    server.log(`Application Handled game rule error: '${errorMessage}'`)
    .then(() => console.log("Logged to server"))
  }
}