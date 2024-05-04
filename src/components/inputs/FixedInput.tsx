import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { grey300, grey500, cream } from "../../constants/colors";

interface PropTypes {
  label: string;
  content: string | undefined;
}

interface DataPropType {
  data: PropTypes;
}

const FixedInput: React.FC<DataPropType> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{data.label}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{data.content}</Text>
      </View>
    </View>
  );
};

export default FixedInput;

const styles = StyleSheet.create({
  container: {
    gap: 6,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    lineHeight: 19,
    color: grey300,
  },
  inputContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: cream,
  },
  inputText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    color: grey500,
  },
});
