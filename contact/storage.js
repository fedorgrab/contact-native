import AsyncStorage from "@react-native-community/async-storage";

async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(`@${key}`, value)
  } catch (e) {
    console.log(e)
  }
}

async function getData(key) {
  try {
    return await AsyncStorage.getItem(`@${key}`)
  } catch (e) {
    console.log(e)
  }
}

async function getAuthToken() {
  return await getData("auth_token")
}

async function setAuthToken(token) {
  await storeData("auth_token", token)
}

export default {getAuthToken, setAuthToken}