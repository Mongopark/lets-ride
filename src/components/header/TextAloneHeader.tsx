import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { grey900 } from "../../constants/colors";

const TextAloneHeader = ({ title }: { title: string }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TextAloneHeader;

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: grey900,
    marginTop: 60,
    marginBottom: 10,
  },
});
