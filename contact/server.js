import {HTTP_HOST_ADDR} from "./application/constants";


async function request(method, endpoint, body) {
  const requestOptions = {
    method: method,
    headers: {"Content-Type": "application/json"},
    credentials: "include",
    body: JSON.stringify(body)
  }
  let response = await fetch(`${HTTP_HOST_ADDR}${endpoint}`, requestOptions)
  if (![200, 201].includes(response.status)) {
    throw {status: response.status, details: await response.json()}
  }
  return await response.json()
}

async function get(endpoint) {
  return await request("GET", endpoint)
}

async function post(endpoint, body) {
  return await request("POST", endpoint, body)
}

async function signUp(email, username, password) {
  return await post(
    "/api/users/sign-up",
    {"email": email, "password": password, "username": username}
  )
}

async function login(username, password) {
  return await post(
    "/api/users/sign-in",
    {"username": username, "password": password}
  )
}

async function authenticateToken(token) {
  return await post("/api/users/sign-in-with-token", {"token": token})
}

async function getProfile() {
  return await get("/api/users/")
}

async function log(message) {
  return await post("/api/system/log-message", {"message": message})
}

function reformatValidationError(error) {
  const formatted = {}
  Object.keys(error).map((key, index) => formatted[key] = error[key][0])
  return formatted
}

export default {signUp, login, authenticateToken, getProfile, reformatValidationError, log}
