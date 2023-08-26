import { StyleSheet, Text, Modal, View,ProgressBarAndroid } from 'react-native'
import React from 'react'
import AppText from '../components/heading/AppText'
import ProgressBar from 'react-native-progress/Bar';
import LottieView from 'lottie-react-native'

const UploadScreen = ({onDone,progress = 0 , visible = false}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        
        {progress < 1 ? 
        <>
        <AppText>{progress * 100} %</AppText>
        <ProgressBar progress={0.7} width={300} height={8} />
        </>
        :<LottieView
        onAnimationFinish={onDone}
            autoPlay loop={false} source={require('../assets/animations/animation_done.json')}
            style={styles.animation}/>
    }
      </View>
    </Modal>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    animation:{
        width:250,
    }
})