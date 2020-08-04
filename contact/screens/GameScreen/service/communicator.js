// const HOST_ADDR_WS = "ws://10.0.0.223:8003/ws/contact-game";
const HOST_ADDR_WS = "ws://172.20.10.3:8003/ws/contact-game";
let websocket;

function openGameConnection() {
  websocket = new WebSocket(HOST_ADDR_WS);
  websocket.onopen = () => {
    console.log("OPENED")
  }
}

function connectionOnMessage(delegateEventCallback, delegateErrorCallback) {
  websocket.onmessage = (e) => {
    let json = JSON.parse(e.data)
    if (json.error) {
      let errorMessage = json.data.details
      let errorType = json.data.error_type
      delegateErrorCallback(errorType, errorMessage)
    } else {
      let gameData = json.data
      let gameEvent = json.event
      delegateEventCallback(gameEvent, gameData)
    }
  }
  websocket.onclose = e => {
    console.log("CLOSED")
    console.log(e)
  }
}

function performAction(event, gameObject) {
  console.log(event, gameObject)
  websocket.send(JSON.stringify({"event": event, "data": gameObject}))
}

function closeGameConnection() {
  websocket.close()
}

export default {openGameConnection, connectionOnMessage, performAction, closeGameConnection}