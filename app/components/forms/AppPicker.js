import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { Picker } from "@react-native-picker/picker";
import AppText from "../heading/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";

const AppPicker = ({ 
  icon, placeholder, items, width ,...otherProps }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            stye={styles.icon}
          />
        )}
        <AppText>{placeholder}</AppText>
      </View>
      <Picker
        dropdownIconRippleColor="lightblue"
        prompt={`Choose ${placeholder}`}
        {...otherProps}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value}  />
        ))}
        {/* <Picker.Item label="Java" value="java"/>
            <Picker.Item  label="Python"value="python"/> */}
      </Picker>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({});
