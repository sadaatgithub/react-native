import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({name, imageUris = [],onChange }) => {
    const scrollView = useRef()
    // console.log(imageUris)

  return (
    <>
    <View>
    <ScrollView 
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        
      <View style={styles.container}>
        {imageUris.map((uri,idx) => (
            <View key={uri} style={styles.image}>
          <ImageInput
            name={name}
            imageUri={uri.uri}
            onChangeImage={(uri,idx) => onChange(imageUris.images?.filter((imageUri,idx) => imageUri !== uri))}
          />
          </View>
        ))}
      <ImageInput 
      onChangeImage={(uri) => onChange([...imageUris, uri])} 
      />
      </View>
      </ScrollView>
      </View>
    </>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image:{
    marginRight:10
  }
});
