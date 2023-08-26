import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../AppButton'
import { useFormikContext } from 'formik'
import { useForm } from 'react-hook-form'

const SubmitButton = ({title,color,onPress}) => {
    // const {handleSubmit,values} = useFormikContext()
    // const {handleSubmit} = useForm()


  return (
    <AppButton title={title} onPress={onPress} color={color}/>

  )
}

export default SubmitButton

const styles = StyleSheet.create({})