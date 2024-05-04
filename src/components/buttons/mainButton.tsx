import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { grey900 } from "../../constants/colors";

type ButtonProps = {
  title: string;
  outline: boolean;
  onPress: () => void;
  bG: string;
  color: string;
  borderColor?: string;
};
const MainButton = ({
  title,
  outline,
  onPress,
  bG,
  color,
  borderColor,
}: ButtonProps) => {
  const btnStyle = {
    backgroundColor: bG,
    borderColor: bG,
  };
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={
        outline
          ? [styles.outlineBtn, { borderColor: borderColor || grey900 }]
          : [btnStyle, styles.fullBtn]
      }
    >
      <Text style={[styles.textBtn, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 20,
    width: 50,
  },
  outlineBtn: {
    borderRadius: 10,
    paddingVertical: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fullBtn: {
    borderRadius: 10,
    paddingVertical: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  textBtn: {
    fontWeight: "700",
    fontSize: 16,
  },
});
