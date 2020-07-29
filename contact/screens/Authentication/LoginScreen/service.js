import storage from "../../../storage";
import server from "../../../server";

export async function loginOnPress(navigation, username, password) {
  let response = await server.login(username, password)
  await storage.setAuthToken(response.token)
  navigation.navigate("Home")
}