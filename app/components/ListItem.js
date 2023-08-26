import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import AppText from "./heading/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../config/colors";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
              )}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex:1
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
