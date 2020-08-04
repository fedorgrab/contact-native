import React, {useEffect, useState} from 'react';
import {loadAsync} from "expo-font";

import server from "../server";
import storage from "../storage";

export function useAuthorization() {
  const [authorized, setAuthorized] = useState(false)
  useEffect(() => {
    // async function authorizeApp() {
    const authorizeApp = async () => {
      const token = await storage.getAuthToken()
      if (token !== null) {
        try {
          await server.authenticateToken(token)
          setAuthorized(true)
        } catch (e) {
          console.log("Session expired")
          setAuthorized(false)
        }
      }
    }
    authorizeApp()
    
    return () => console.log("Application Closed")
  }, [])
  return authorized
}

export function useFonts() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    loadAsync({Roboto: require("../../static/fonts/Roboto/Roboto-Regular.ttf")})
    .then(() => setIsLoaded(true))
  }, [])
  return isLoaded
}