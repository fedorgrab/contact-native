import React, {useState} from 'react';
import {View} from "react-native";
import {styles} from "../styles";
import TextField from "../../components/TextField";
import MenuButton from "../../components/MenuButton";
import {signUpOnPress} from "./service";
import Logo from "../../components/Logo"
import {useValidationHandling} from "../service";
import AuthNavigationBlock from "../../components/AuthNavigationBlock";

const initialErrorsState = {email: "", username: "", password: ""}


const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  
  const [formValidErrors, setFormValidErrors, presetDecorator] = useValidationHandling(initialErrorsState)
  
  return (
    <View style={styles.screenContainer}>
      <Logo style={styles.contactLogoImage}/>
      <View style={styles.textInputContainer}>
        <TextField
          setText={(email) => presetDecorator(setEmail, {email})}
          text={email}
          placeholder={"Email"}
          validErrorText={formValidErrors.email}
        />
        <TextField
          setText={(username) => presetDecorator(setUsername, {username})}
          text={username}
          placeholder={"Username"}
          validErrorText={formValidErrors.username}
        />
        <TextField
          setText={(password) => presetDecorator(setPassword, {password})}
          text={password}
          password={true}
          placeholder={"Password"}
          validErrorText={formValidErrors.password}
        />
        <TextField
          setText={(password2) => presetDecorator(setPassword2, {password2})}
          text={password2}
          password={true}
          placeholder={"Confirm Password"}
        />
      </View>
      <MenuButton title={"Sign Up"} onPress={() =>
        signUpOnPress(navigation, username, password, password2, email, setFormValidErrors)
      }/>
      <AuthNavigationBlock
        infoText={"Already have an account?"}
        linkText={"Log In!"}
        onTouchCallback={() => navigation.reset({index: 0, routes: [{name: "Login"}]})}
      />
    </View>
  )
}

export default SignUpScreen;