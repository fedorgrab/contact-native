const HOST_ADDR = "http://10.0.0.223:8003";


async function request(method, endpoint, body) {
  const requestOptions = {
    method: method,
    headers: {"Content-Type": "application/json"},
    credentials: "include",
    body: JSON.stringify(body)
  }
  let response = await fetch(`${HOST_ADDR}${endpoint}`, requestOptions)
  if (response.status === 400) throw {status: 400, message: await response.json()}
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

export default {signUp, login, authenticateToken, getProfile}
