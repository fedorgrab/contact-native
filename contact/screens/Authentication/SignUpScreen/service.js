import storage from "../../../storage";
import server from "../../../server";

export async function signUpOnPress(navigation, username, password, password2, email, setFormValidErrors) {
  if (password !== password2) {
    setFormValidErrors({"password": "Passwords are different"})
  } else {
    try {
      let response = await server.signUp(email, username, password)
      await storage.setAuthToken(response.token)
      navigation.navigate("Home")
    } catch (e) {
      if (e.status === 400) setFormValidErrors(server.reformatValidationError(e.details))
    }
  }
}