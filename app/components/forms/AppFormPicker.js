import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPicker from './AppPicker'
import { useFormikContext } from 'formik'
import  ErrorMessage  from './ErrorMessage'
import { Controller, useForm } from "react-hook-form";

const AppFormPicker = ({control,items,name,placeholder,width}) => {
  //  const {errors,setFieldValue,touched,values} = useFormikContext()
  return (

    <Controller
        control={control}
        name={name}
        render={({field:{value,onChange,onBlur},fieldState:{error},})=>(
          <>
    <AppPicker 
            items={items}
            placeholder={placeholder} 
            selectedValue={value}
            onValueChange={onChange}
            width={width}
            onBlur={onBlur}

            />
            <ErrorMessage error={error?.message} visible={error}/>
       </>  
        )}/>
       
  )
}

export default AppFormPicker

const styles = StyleSheet.create({})