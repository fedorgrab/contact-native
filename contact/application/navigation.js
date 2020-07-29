import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/Authentication/LoginScreen";
import Game from "../screens/Game";
import SignUpScreen from "../screens/Authentication/SignUpScreen";

const Stack = createStackNavigator()

export const AuthorizedStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Game" component={Game} options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
)

export const UnAuthorizedStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Game" component={Game} options={{headerShown: false}}/>
  </Stack.Navigator>
)
