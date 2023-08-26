import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as FileSystem from 'expo-file-system';
import React, { useEffect } from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
    }
  };


  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert("Delete", "Are You sure to delete", [
        { text: "Yes", onPress: () => onChangeImage() },
        { text: "No" },
      ]);
  };


  useEffect(() => {
    requestPermission();
  }, []);


  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0]);
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image}  />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
