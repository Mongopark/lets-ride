import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { grey40, grey900 } from "../../constants/colors";

type MainTextInputProps = {
  placeholder?: string;
};
const MainTextInput = ({ placeholder }: MainTextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={() => {}}
      placeholder={placeholder}
    />
  );
};

export default MainTextInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: grey40,
    borderRadius: 8,
    fontSize: 14,
    color: grey900,
  },
});
