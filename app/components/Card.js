import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './heading/AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Card = ({title,subTitle,imageUrl,onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.cardContainer}>
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri:imageUrl}}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        padding:20,
        flex:1,
        
    },
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        gap:10,
        overflow:"hidden"
    },
    cardImage:{
        width:"100%",
        height:200,
    },
    title:{
            marginBottom:7
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    },
    detailsContainer:{
        paddingHorizontal:12
    }
})