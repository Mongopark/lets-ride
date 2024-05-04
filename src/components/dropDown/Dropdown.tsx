import { View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { ArrowRight2 } from "iconsax-react-native";
import { grey900 } from "../../constants/colors";
import { styles } from "../../styles/components/dropDown/Dropdown";

type DropdownProps = {
  title?: string;
  element: any;
  onPress: (e: any) => any;
};

export default function Dropdown({ element, onPress, title }: DropdownProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(element)}
      style={[styles.container]}
    >
      <View style={styles.leftSide}>
        <View>{element.icon}</View>
        <Text style={styles.title}>
          {element.title}
          {title}
        </Text>
      </View>
      <View>{element.icon && <ArrowRight2 size="24" color={grey900} />}</View>
    </TouchableOpacity>
  );
}
