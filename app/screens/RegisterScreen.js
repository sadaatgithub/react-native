import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup"
import Screen from '../components/Screen'
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import useApi from '../api/useApi'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

const validationSchema = Yup.object().shape({
    username:Yup.string().required().label("Username"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

const RegisterScreen = ({navigation}) => {
  const {control, handleSubmit,formState:{errors}} = useForm({
  resolver:yupResolver(validationSchema)
})
  const registerApi = useApi();
  const {logIn} = useAuth()
//   const loginApi = useApi(authApi.login);
  const [error, setError] = useState();

  
  const onSubmit = async ({username,email,password}) => {
    const result = await authApi.register(username,email,password)
    if(!result.ok) {
      
      return setError(result.data["email"] || result.data["username"])
    }
    const login = await authApi.login(username,password)
    logIn(login.data.access)
  }

  return (
    <Screen style={styles.container}>
      
            <ErrorMessage error={error} visible={error}/>
    <AppFormField
    control={control}
        autoCorrect={false}
        icon="account"
        name="username"
        placeholder="Username"
        />
        <AppFormField
          control={control}
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
             control={control}
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" color="secondary" onPress={handleSubmit(onSubmit)}/>
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})