import { StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../heading/AppText';

const ErrorMEssage = ({error,visible}) => {
    if (!visible && !error) return null;
    return (
      <AppText style={styles.error}>{error}</AppText>
    )
  
}

export default ErrorMEssage

const styles = StyleSheet.create({
    error:{
        color:"red",
        fontSize:16
    }
})