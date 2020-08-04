import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/Authentication/LoginScreen/LoginScreen";
import SignUpScreen from "../screens/Authentication/SignUpScreen/SignUpScreen";
import GameScreen from "../screens/GameScreen";

const forFade = ({current}) => ({cardStyle: {opacity: current.progress}})
const Stack = createStackNavigator()

export const AuthorizedStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Game" component={GameScreen}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="SignUp" component={SignUpScreen}/>
  </Stack.Navigator>
)

export const UnAuthorizedStackNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
    cardStyleInterpolator: forFade,
  }}>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Game" component={GameScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
)
