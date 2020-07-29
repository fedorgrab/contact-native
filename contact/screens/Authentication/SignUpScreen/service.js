import storage from "../../../storage";
import server from "../../../server";

export async function signUpOnPress(navigation, username, password, password2, email, setPasswordValid) {
  if (password !== password2) {
    setPasswordValid(false)
  } else {
    let response = await server.signUp(email, username, password)
    await storage.setAuthToken(response.token)
    navigation.navigate("Home")
  }
}