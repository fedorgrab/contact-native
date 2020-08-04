import {GAME_EVENT} from "./events";
import server from "../../../server";


const setUpView = (room, user, gameStateDispatch, gameScreenDispatch) => {
  const isGameHost = room.game_host_key === user.username
  const view = isGameHost ? "GameHost" : "GamePlayer"
  gameScreenDispatch({type: "changeView", view})
  if (isGameHost && !room.game_is_started) gameScreenDispatch({type: "wordModalVisible"})
}

function startGameEvent(event, room, user, gameStateDispatch, gameScreenDispatch) {
  gameStateDispatch({event, room})
  if (room.is_full) setUpView(room, user, gameStateDispatch, gameScreenDispatch)
}

const FINISH_MESSAGES = {
  "disconnection": "One of the players was disconnected. GameScreen is finished.",
  "host_won": "GameScreen is finished, host won",
  "players_won": "GameScreen is finished, players won"
}

function finishGameEvent(event, room, gameStateDispatch, gameScreenDispatch) {
  gameStateDispatch({event, room})
  gameScreenDispatch({
    type: "finishModalVisible",
    message: FINISH_MESSAGES[room.game_finish_reason]
  })
}

export function handleGameEvents(event, room, user, gameStateDispatch, gameScreenDispatch) {
  switch (event) {
    case GAME_EVENT.START:
      return startGameEvent(event, room, user, gameStateDispatch, gameScreenDispatch)
    case GAME_EVENT.CONTINUE:
      return startGameEvent(event, room, user, gameStateDispatch, gameScreenDispatch)
    case GAME_EVENT.FINISH:
      return finishGameEvent(event, room, gameStateDispatch, gameScreenDispatch)
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