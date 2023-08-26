import { ActivityIndicator, Button, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import route from "../navigation/route";
import listingApi from "../api/listings";
import AppText from "../components/heading/AppText";
import useApi from "../api/useApi";
import authStorage from "../auth/storage";

// const listings = [
//   {
//     id: 1,
//     title: "Red Jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch In great condition",
//     price: 400,
//     image: require("../assets/couch.jpg"),
//   },
// ];

const ListingsScreen = ({ navigation }) => {
  const getListingApi = useApi(listingApi.getListings);
  const token = authStorage.getToken()

  useEffect(() => {
if(token){
  getListingApi.request();
}
  }, []);
  return (
    <Screen style={styles.screen}>
      {getListingApi.error && (
        <>
          <AppText>Couldnt retrieve the listings</AppText>
          <Button title="Refresh" onPress={getListingApi.request} />
        </>
      )}
      <ActivityIndicator
        animating={getListingApi.loading}
        size={40}
        style={{ top: "50%" , zIndex:2}}
      />
      <FlatList
        data={getListingApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0]?.url}
            onPress={() => navigation.navigate(route.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
