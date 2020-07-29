import storage from "../../../storage";
import server from "../../../server";


export async function loginOnPress(navigation, username, password, setFormValidErrors) {
  try {
    let response = await server.login(username, password)
    await storage.setAuthToken(response.token)
    navigation.navigate("Home")
  } catch (e) {
    if (e.status === 400) setFormValidErrors(server.reformatValidationError(e.details))
  }
}