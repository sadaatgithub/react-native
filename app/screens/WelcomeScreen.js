import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What you dont need</Text>
        </View>

        <View style={styles.buttonContainer}>
      <AppButton title="Login" onPress={()=> navigation.navigate("Login")}/>
      <AppButton title="Register" color="secondary" onPress={()=> navigation.navigate("Register")}/>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"center"
  },
 
  logoContainer:{
    position:"absolute",
    top:70,
    alignItems:"center",
    gap:8
  },
  logo:{
    width:100,
    height:100,
  },
 buttonContainer:{
    width:"100%",
    gap:10,
    paddingHorizontal:10,
    paddingBottom:10

 }
 

});
