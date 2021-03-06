import React, {useState} from 'react';
import {View, Text} from "react-native";
import TextField from "../../components/TextField";
import MenuButton from "../../components/MenuButton";
import Logo from "../../components/Logo";
import FacebookButton from "../components/FacebookButton";
import AuthNavigationBlock from "../components/AuthNavigationBlock";
import {styles} from "../styles";
import {useValidationHandling} from "../service";
import {loginOnPress} from "./service";
import OrDelimiter from "../components/OrDelimiter";


const initialErrorsState = {username: "", password: ""}


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [formValidErrors, setFormValidErrors, presetDecorator] = useValidationHandling(initialErrorsState)
  
  return (
    <View style={styles.screenContainer}>
      <Logo style={styles.contactLogoImage}/>
      <View style={styles.textInputContainer}>
        <TextField
          setText={(username) => presetDecorator(setUsername, {username})}
          text={username}
          placeholder={"Username"}
          validErrorText={formValidErrors.username}
        />
        <TextField
          setText={(password) => presetDecorator(setPassword, {password})}
          text={password}
          placeholder={"Password"}
          validErrorText={formValidErrors.password}
          password={true}
        />
      </View>
      <MenuButton
        title={"Log In"}
        onPress={() => loginOnPress(navigation, username, password, setFormValidErrors)}
      />
      <AuthNavigationBlock
        infoText={"Don't have an account yet?"}
        linkText={"Sign Up!"}
        onTouchCallback={() => navigation.reset({index: 0, routes: [{name: "SignUp"}]})}
      />
      <OrDelimiter/>
      <FacebookButton/>
    </View>
  )
}

export default LoginScreen;