import React, {useState} from 'react';
import {Text, TouchableOpacity, View,} from "react-native";
import {styles} from "../styles";
import TextField from "../../components/TextField";
import MenuButton from "../../components/MenuButton";
import {signUpOnPress} from "./service";
import Logo from "../../components/Logo"

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [passwordValid, setPasswordValid] = useState(true)
  
  return (
    <View style={styles.screenContainer}>
      <View style={styles.signUpContainer}>
        <Logo/>
        <View style={styles.textInputContainer}>
          <TextField setText={setEmail} text={email} placeholder={"Email"} error={false}/>
          <TextField setText={setUsername} text={username} placeholder={"Username"} error={false}/>
          <TextField
            setText={setPassword}
            text={password}
            password={true}
            placeholder={"Password"}
            error={!passwordValid}
          />
          <TextField
            setText={setPassword2}
            text={password2}
            password={true}
            placeholder={"Confirm Password"}
            error={!passwordValid}
          />
        </View>
        <MenuButton title={"Sign Up"} onPress={() =>
          signUpOnPress(navigation, username, password, password2, email, setPasswordValid)
        }/>
        
        <View style={styles.loginNavigateContainer}>
          <Text style={styles.infoText}>{"Already have an account?"}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText}>{"Log In!"}</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  )
}

export default SignUpScreen;