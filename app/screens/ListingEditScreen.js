import { StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import * as Yup from "yup";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  categoryId: Yup.string().required().label("Category"),
  // images:Yup.array().min(1,"Please Select atleast one image"),
});
const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];


const ListingEditScreen = () => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const {control, handleSubmit,formState:{errors},reset} = useForm({
    resolver:yupResolver(validationSchema)
  })
const onSubmit = async (data) =>{
 
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListings(data,
       (progress) =>
      setProgress(progress)
    );
console.log(result.data)
    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save listing");
    }
    reset()
}


  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      
        <FormImagePicker 
        name="images" 
        control={control}/>

        <AppFormField 
        control={control}
        maxLength={255} 
        name="title" 
        placeholder="Title" 
        />

        <AppFormField
        control={control}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          control={control}
          items={categories}
          name="categoryId"
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          control={control}
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" onPress={handleSubmit(onSubmit)}/>
    </KeyboardAvoidingView>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
