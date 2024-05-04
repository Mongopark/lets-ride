import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { grey40, grey100, grey900 } from "../../constants/colors";
import { View } from "react-native";

type ButtonProps = {
  title: string;
  outline: boolean;
  onPress: () => void;
  bG: string;
  color: string;
  borderColor?: string;
  disabled?: boolean;
};
const CustomButton = ({
  title,
  outline,
  onPress,
  bG,
  color,
  borderColor,
  disabled,
}: ButtonProps) => {
  const btnStyle = {
    backgroundColor: bG,
    borderColor: bG,
  };
  return (
    <>
      {disabled ? (
        <View style={styles.disbledBtn}>
          <Text style={[styles.textDisabled]}>{title}</Text>
        </View>
      ) : (
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
      )}
    </>
  );
};

export default CustomButton;

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
  disbledBtn: {
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: grey40,
  },
  textDisabled: {
    color: grey100,
    fontWeight: "700",
    fontSize: 16,
  },
});
