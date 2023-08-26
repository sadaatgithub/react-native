import React, {  useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import authApi from '../api/auth'
import {AppFormField,SubmitButton} from "../components/forms"

import * as Yup from "yup";
import useAuth from "../auth/useAuth";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [loginFailed,setLoginFailed] = useState(false)
  const {logIn} = useAuth()
const {control, handleSubmit,formState:{errors}} = useForm({
  resolver:yupResolver(validationSchema)
})

const onSubmit = async (data) =>{
  const {email, password} = data
  console.log(data)
  const result = await authApi.login(email,password)
  console.log(result.data)


  if(!result){
    setLoginFailed(true);
    }
    setLoginFailed(false)
    logIn(result.data)
}

  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      
        {/* <ErrorMessage error="invalid email or password" visible={loginFailed}/> */}
        <AppFormField
          control={control}
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
         
        />

        <AppFormField
        control={control}
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
