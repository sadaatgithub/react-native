import { StyleSheet } from "react-native";
import React, {  useState } from "react";
import Screen from "../components/Screen";
import ImageInputList from "../components/ImageInputList";

const ImagePickerScreen = () => {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen style={styles.screen}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
};

export default ImagePickerScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
});
