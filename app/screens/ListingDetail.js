import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/heading/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const ListingDetail = ({ route }) => {
  const listing = route.params;
  return (
    <Screen>
      <Image style={styles.image} source={{uri:listing.images[0]?.url}} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </Screen>
  );
};

export default ListingDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
