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

const FINISH_MESSAGES = {
  "disconnection": "One of the players was disconnected. GameScreen is finished.",
  "host_won": "GameScreen is finished, host won",
  "players_won": "GameScreen is finished, players won"
}

function finishGameEvent(event, room) {
  gameStateDispatch({event, room})
  gameScreenDispatch({type: "finishModalVisible", message: FINISH_MESSAGES[room.game_finish_reason]})
}

//make functions pure
export function handleGameEvents(event, room, user, gameStateDispatchCallback, gameScreenDispatchCallback) {
  gameStateDispatch = gameStateDispatchCallback
  gameScreenDispatch = gameScreenDispatchCallback
  
  switch (event) {
    case GAME_EVENT.START:
      return startGameEvent(event, room, user)
    case GAME_EVENT.CONTINUE:
      return startGameEvent(event, room, user)
    case GAME_EVENT.FINISH:
      return finishGameEvent(event, room)
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