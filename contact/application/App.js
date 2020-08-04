import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppLoading} from "expo";
import {UserContext} from "./context";
import {useAuthorization, useFonts} from "./service";
import {AuthorizedStackNavigator, UnAuthorizedStackNavigator} from "./navigation"

const App = () => {
  const [user, setUser] = useState(null)
  let authorized = useAuthorization()
  let fontsLoaded = useFonts()
  return (
    <>
      {fontsLoaded ? (
        <UserContext.Provider value={{user, setUser}}>
          <NavigationContainer>
            {authorized ? <AuthorizedStackNavigator/> : <UnAuthorizedStackNavigator/>}
          </NavigationContainer>
        </UserContext.Provider>
      ) : (<AppLoading/>)
      }
    </>
  )
}

export default App;