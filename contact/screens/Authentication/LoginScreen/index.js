import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import {loginOnPress} from "./service";
import TextField from "../../components/TextField";
import MenuButton from "../../components/MenuButton";
import Logo from "../../components/Logo";


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <View style={styles.screenContainer}>
      <View style={styles.signUpContainer}>
        <Logo style={styles.contactLogoImage}/>
        <View style={styles.textInputContainer}>
          <TextField setText={setUsername} text={username} placeholder={"Username"} error={false}/>
          <TextField
            setText={setPassword}
            text={password}
            placeholder={"Password"}
            error={false}
            password={true}
          />
        </View>
        <MenuButton title={"Log In"} onPress={() => loginOnPress(navigation, username, password)}/>
        <View style={styles.loginNavigateContainer}>
          <Text style={styles.infoText}>{"Don't have an account yet?"}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>{"Sign Up!"}</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  )
}

export default LoginScreen