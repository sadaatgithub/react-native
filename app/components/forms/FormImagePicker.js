import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInputList from '../ImageInputList'
import  ErrorMessage  from './ErrorMessage'
import { useFormikContext } from 'formik'
import { Controller } from "react-hook-form";

const FormImagePicker = ({control,name}) => {
  //  const {errors,setFieldValue,touched,values} = useFormikContext()
  //   const imageUris = values[name]
  // console.log(imageUris)
  //  const handleAdd = (uri) => {
  //   setFieldValue(name,[...imageUris, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setFieldValue(name,imageUris.filter((imageUri) => imageUri !== uri));
  // };
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field:{value,onChange,onBlur},fieldState:{error}})=>(
          
          <>
          <ImageInputList 
          imageUris={value}
          name={name}
              //     onAddImage={handleAdd}
              // onRemoveImage={handleRemove}
              onChange={onChange}
              />
      </>
        )}/>
    {/* <ErrorMessage error={errors[name]} visible={touched[name]}/> */}

    </>
  )
}

export default FormImagePicker

const styles = StyleSheet.create({})